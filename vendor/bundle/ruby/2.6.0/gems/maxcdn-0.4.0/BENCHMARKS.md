Running on Ruby version:

ruby 2.2.3p173 (2015-08-18 revision 51636) [x86_64-linux]


Running benchmarks as follows in order:

 maxcdn.get('zones/pull.json')
 maxcdn.get('reports/popularfiles.json')
 maxcdn.get('v3/reporting/logs.json')
 maxcdn.post('zones/pull.json', { :name => 'NAM', :url => 'URL' })
 maxcdn.put('account.json', { :name => 'NAME' })
 maxcdn.delete('zones/pull.json/ZONEID')
 maxcdn.purge('ZONEID')
 maxcdn.purge('ZONEID', 'FILE')
 maxcdn.purge('ZONEID', [ 'FILE1','FILE2' ])

       user     system      total        real
get   :  0.010000   0.000000   0.010000 (  0.444660)
get   :  0.000000   0.000000   0.000000 (  0.180768)
get   :  0.000000   0.010000   0.010000 (  0.556110)
post  :  0.010000   0.000000   0.010000 (  3.665597)
put   :  0.000000   0.000000   0.000000 (  0.370504)
delete:  0.010000   0.000000   0.010000 (  2.557845)
purge :  0.000000   0.000000   0.000000 (  1.392236)
purge :  0.000000   0.000000   0.000000 (  1.386664)
purge :  0.000000   0.000000   0.000000 (  2.841199)

