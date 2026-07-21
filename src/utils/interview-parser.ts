export type Speaker = "questioner" | "answerer";

export type InterviewSegment = {
  type: "prompt" | "response";
  speaker: Speaker;
  content: string;
  speakerName: string;
};

export function parseInterviewSegments(
  fullContent: string,
  intervieweeName: string
): InterviewSegment[] {
  const blocks = fullContent
    .trim()
    .split(/\n\n+/)
    .map((b) => b.trim())
    .filter(Boolean);

  const segments: InterviewSegment[] = [];

  for (const block of blocks) {
    if (block.startsWith("### ")) {
      segments.push({
        type: "prompt",
        speaker: "questioner",
        content: block.replace(/^###\s+/, "").trim(),
        speakerName: "Interviewer",
      });
    } else if (block.startsWith("> ")) {
      const withoutMarker = block
        .split("\n")
        .map((line) => line.replace(/^>\s*/, ""))
        .join("\n")
        .trim();

      const nameMatch = withoutMarker.match(/^([A-Za-z\s'.]+?):\s*/);
      const name = nameMatch ? nameMatch[1].trim() : intervieweeName;
      const content = nameMatch
        ? withoutMarker.slice(nameMatch[0].length)
        : withoutMarker;

      segments.push({
        type: "response",
        speaker: "answerer",
        content,
        speakerName: name,
      });
    }
  }

  return segments;
}
