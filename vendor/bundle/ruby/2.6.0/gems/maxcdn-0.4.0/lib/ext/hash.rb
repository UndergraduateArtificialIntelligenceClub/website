require 'addressable'

class Hash
  def _escape(value)
    Addressable::URI.encode(Addressable::URI.parse(value.to_s))
  rescue ArgumentError
    Addressable::URI.encode(Addressable::URI.parse(value.to_s.force_encoding(Encoding::UTF_8)))
  end

  def to_params
    params = ''
    stack = []

    each do |k, v|
      if v.is_a?(Hash)
        stack << [k,v]
      elsif v.is_a?(Array)
        stack << [k,Hash.from_array(v)]
      else
        params << "#{_escape(k)}=#{_escape(v)}&"
      end
    end

    stack.each do |parent, hash|
      parent = _escape(parent) if parent.is_a? String
      hash.each do |k, v|
        if v.is_a?(Hash)
          stack << ["#{parent}[#{k}]", v]
        else
          params << "#{parent}[#{k}]=#{_escape(v)}&"
        end
      end
    end

    params.chop!
    params
  end

  def case_indifferent_delete key
    existing_keys = self.keys.map { |k| k.downcase }
    index = existing_keys.index(key.downcase)
    unless index.nil?
      self.delete(self.keys[index])
    end
  end

  def case_indifferent_merge incoming_hash
    existing_keys = self.keys.map { |k| k.downcase }

    incoming_hash.each do |key, value|
      index = existing_keys.index(key.downcase)
      if index.nil?
        self[key] = value
      else
        self[self.keys[index]] = value
      end
    end
  end

  def self.from_array(array = [])
    h = Hash.new
    array.size.times do |t|
      h[t] = array[t]
    end
    h
  end
end

