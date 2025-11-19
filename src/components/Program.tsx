import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Link } from "react-router-dom";
import { ExternalLink } from "lucide-react";
import { formatInTimeZone, fromZonedTime } from "date-fns-tz";
import { useState, useEffect } from "react";

const Program = () => {
  const [userTimezone, setUserTimezone] = useState<string>("Africa/Tunis");
  
  useEffect(() => {
    // Detect user's timezone
    const detected = Intl.DateTimeFormat().resolvedOptions().timeZone;
    setUserTimezone(detected);
  }, []);

  // Convert Tunisia time to user's timezone
  const convertTime = (dateStr: string, timeRange: string) => {
    // dateStr format: "Day N - DayName, Mon DD, YYYY"
    // timeRange format: "HH:MM–HH:MM" or "HH:MM"
    
    // Extract date from the day string
    const dateMatch = dateStr.match(/(\w+) (\d+), (\d+)/);
    if (!dateMatch) return timeRange;
    
    const [, month, day, year] = dateMatch;
    const monthMap: { [key: string]: number } = {
      "Jan": 0, "Feb": 1, "Mar": 2, "Apr": 3, "May": 4, "Jun": 5,
      "Jul": 6, "Aug": 7, "Sep": 8, "Oct": 9, "Nov": 10, "Dec": 11
    };
    
    // Parse the time range
    const times = timeRange.split("–").map(t => t.trim());
    
    const convertSingleTime = (timeStr: string) => {
      const [hours, minutes] = timeStr.split(":").map(Number);
      
      // If user is in Tunisia timezone, no conversion needed
      if (userTimezone === "Africa/Tunis") {
        return timeStr;
      }
      
      try {
        // Create a date string in Tunisia timezone
        const tunisiaDateStr = `${year}-${String(monthMap[month] + 1).padStart(2, '0')}-${String(day).padStart(2, '0')}T${String(hours).padStart(2, '0')}:${String(minutes).padStart(2, '0')}:00`;
        
        // Treat the date string as Tunisia time and convert to UTC
        const utcDate = fromZonedTime(tunisiaDateStr, "Africa/Tunis");
        // Format the UTC date in the user's timezone
        const formattedTime = formatInTimeZone(utcDate, userTimezone, "HH:mm");
        
        return formattedTime;
      } catch (error) {
        console.error("Time conversion error:", error);
        return timeStr;
      }
    };
    
    if (times.length === 2) {
      return `${convertSingleTime(times[0])}–${convertSingleTime(times[1])}`;
    }
    return convertSingleTime(times[0]);
  };

  const schedule = [
    {
      day: "Day 1 - Monday, Nov 24, 2025",
      sessions: [
        { time: "08:30–09:00", title: "Registration & Welcome Coffee", speaker: "", type: "" },
        { time: "09:00–09:15", title: "Opening Remarks", speaker: "Pr. Ali Ouni, Dr. Maha Khemaja, Dr. Montassar Ben Messaoud", type: "On-site" },
        { time: "09:15–10:15", title: "Keynote - The AIware Revolution: Forging the Future of Agentic Software Engineering", speaker: "Pr. Ahmed E. Hassan", type: "On-site" },
        { time: "10:15–10:45", title: "Coffee Break", speaker: "", type: "" },
        { time: "10:45–11:45", title: "How to Write a Great Research Paper?", speaker: "Pr. Simon Peyton Jones", type: "Remote" },
        { time: "11:45–12:30", title: "On Hard and Soft Skills for Surviving Your PhD Journey", speaker: "Pr. Walid Maalej", type: "On-site" },
        { time: "12:30–12:45", title: "Gathering and Group Photo", speaker: "", type: "" },
        { time: "12:45–14:00", title: "Lunch", speaker: "", type: "" },
        { time: "14:00–14:45", title: "Navigating Graduate School and Beyond", speaker: "Dr. Sarah Nadi", type: "Remote" },
        { time: "14:45–15:30", title: "Keynote - Towards a framework for the development of SPAs (smart process applications)", speaker: "Pr. Hafedh Mili", type: "On-site" },
        { time: "15:30–16:00", title: "Coffee Break", speaker: "", type: "" },
        { time: "16:00–16:30", title: "Panel Discussion – open (students mentoring, best research practices, AI and SE in the Next Decade)", speaker: "", type: "On-site" },
        { time: "16:30–17:15", title: "Human in the Loop: Responsible Use of Generative AI Tools in Software Engineering Practice", speaker: "Pr. Bruce Maxim", type: "Remote" },
        { time: "17:15–18:00", title: "LLM-Based Agents for Software Engineering: Benefits and Drawbacks", speaker: "Dr. Fatemeh Fard", type: "Remote" },
        { time: "18:00–20:30", title: "Cultural Evening & Tunisian Dinner", speaker: "", type: "" },
      ]
    },
    {
      day: "Day 2 - Tuesday, Nov 25, 2025",
      sessions: [
        { time: "08:30–09:30", title: "Keynote - No Size Fits All: Goal-Driven Alignment of LLMs for Software Engineering Tasks", speaker: "Pr. Houari Sahraoui", type: "On-site" },
        { time: "09:30–10:30", title: "Keynote - Generative Requirements Engineering and Design", speaker: "Pr. Walid Maalej", type: "On-site" },
        { time: "10:30–11:00", title: "Coffee Break", speaker: "", type: "" },
        { time: "11:00–11:30", title: "Ask me anything: How to integrate AI into computer science and SE curriculum at the undergraduate levels", speaker: "Pr. Ahmed E. Hassan", type: "On-site" },
        { time: "11:30–12:30", title: "Keynote - On Software Architecture", speaker: "Pr. Michel Chaudron", type: "Remote" },
        { time: "12:30–13:45", title: "Lunch", speaker: "", type: "" },
        { time: "13:45–14:30", title: "The Chronicles of a Professor", speaker: "Dr. Sarah Nadi", type: "Remote" },
        { time: "14:30–15:30", title: "Keynote - Automated Testing and Safety Analysis of Deep Learning Systems", speaker: "Pr. Lionel Briand", type: "Remote" },
        { time: "15:30–16:00", title: "Coffee Break", speaker: "", type: "" },
        { time: "16:00–16:45", title: "Why and How to get a PhD?", speaker: "Pr. Lionel Briand", type: "Remote" },
        { time: "16:45–17:30", title: "11 steps to structuring a manuscript", speaker: "Mr. Prasun Lala", type: "Remote" },
        { time: "17:30–18:15", title: "Think like a reviewer", speaker: "Mr. Prasun Lala", type: "Remote" },
      ]
    },
    {
      day: "Day 3 - Wednesday, Nov 26, 2025",
      sessions: [
        { time: "08:30–09:15", title: "From Monolith to Microservices — A Journey Powered by LLMs and the Open Challenges Ahead", speaker: "Dr. Mohamed Aymen Saied", type: "On-site" },
        { time: "09:15–10:00", title: "Automating Code Review: From Heuristics to Agentic AI", speaker: "Dr. Moataz Chouchen", type: "On-site" },
        { time: "10:00–10:30", title: "Coffee Break", speaker: "", type: "" },
        { time: "10:30–11:00", title: "Code Clones and Beyond: My Reflections on Software Engineering Research", speaker: "Pr. Katsuro Inoue", type: "Remote" },
        { time: "11:00–11:45", title: "Phinally Done: Life Beyond the Ivory Tower", speaker: "Dr. Zadia Codabux", type: "On-site" },
        { time: "11:45–12:30", title: "Collaborations Result in Diverse Thinking, Novelty and Different Perspectives", speaker: "Pr. Raula Gaikovina Kula", type: "Remote" },
        { time: "12:30–14:00", title: "Lunch", speaker: "", type: "" },
        { time: "14:00–15:15", title: "About Empirical Studies on Software Quality", speaker: "Pr. Yann-Gaël Guéhéneuc", type: "Remote" },
        { time: "15:15–16:00", title: "Ensuring Trust: Testing and Safety Monitoring of Deep Learning-based Systems", speaker: "Dr. Manel Abdellatif", type: "Remote" },
        { time: "16:00–16:30", title: "Coffee Break", speaker: "", type: "" },
        { time: "16:30–17:15", title: "System assurance in the era of Large Language Models", speaker: "Dr. Alvine B. Belle", type: "Remote" },
        { time: "17:15–18:00", title: "Kickstart Your AI Journey with NVIDIA's Free Learning Resources", speaker: "Ms. Fatima Tambajang", type: "Remote" },
        { time: "18:00–18:15", title: "Closing Remarks & Certificates", speaker: "", type: "" },
        { time: "18:15–18:30", title: "Farewell Coffee", speaker: "", type: "" },
      ]
    },
    {
      day: "Day 4 - Thursday, Nov 27, 2025",
      sessions: [
        { time: "10:00–11:00", title: "NVIDIA Certifications (Building RAG Agents with LLMs and Building Conversational AI applications)", speaker: "Dr. Maha KHEMAJA", type: "Remote", description: "Building RAG Agents with LLMs: Agents powered by large language models (LLMs) have shown great retrieval capability. This certificate explains how to deploy an agent system in practice with the flexibility to scale the system to meet the demands of users and customers.\n\nBuilding Conversational AI applications: Learn how to quickly build and deploy a conversational AI pipeline including transcription, NLP, and Speech" },
      ]
    }
  ];

  const getEventType = (title: string) => {
    if (title.includes("Coffee Break") || title.includes("Farewell Coffee")) return "coffee";
    if (title.includes("Lunch")) return "lunch";
    if (title.includes("Gathering and Group Photo") || title.includes("Cultural Evening")) return "social";
    if (title.includes("Registration") || title.includes("Opening Remarks") || title.includes("Closing Remarks")) return "ceremony";
    return "talk";
  };

  const getEventStyles = (type: string) => {
    switch(type) {
      case "coffee":
        return "bg-amber-50 dark:bg-amber-950/30 border-l-4 border-amber-500";
      case "lunch":
        return "bg-green-50 dark:bg-green-950/30 border-l-4 border-green-500";
      case "social":
        return "bg-purple-50 dark:bg-purple-950/30 border-l-4 border-purple-500";
      case "ceremony":
        return "bg-muted/50";
      default:
        return "bg-card";
    }
  };

  const hasDetailPage = (speakerName: string) => {
    const speakersWithPages = [
      "Dr. Moataz Chouchen", "Moataz Chouchen", "Pr. Bruce R. Maxim", "Pr. Bruce Maxim", "Bruce Maxim",
      "Pr. Michel Chaudron", "Michel Chaudron", "Pr. Lionel Briand", "Lionel Briand",
      "Pr. Walid Maalej", "Walid Maalej", "Pr. Simon Peyton Jones", "Simon Peyton Jones",
      "Pr. Ahmed E. Hassan", "Ahmed E. Hassan", "Dr. Fatemeh Fard", "Fatemeh Fard",
      "Pr. Raula Gaikovina Kula", "Raula Gaikovina Kula", "Pr. Katsuro Inoue", "Katsuro Inoue",
      "Dr. Sarah Nadi", "Sarah Nadi", "Pr. Houari Sahraoui", "Houari Sahraoui",
      "Dr. Alvine Boaye Belle", "Dr. Alvine B. Belle", "Alvine B. Belle", "Alvine Boaye Belle",
      "Dr. Zadia Codabux", "Zadia Codabux", "Dr. Mohamed Aymen Saied", "Mohamed Aymen Saied",
      "Ms. Fatima Tambajang", "Fatima Tambajang", "Dr. Manel Abdellatif", "Manel Abdellatif",
      "Pr. Hafedh Mili", "Hafedh Mili", "Mr. Prasun Lala", "Prasun Lala",
      "Pr. Yann-Gaël Guéhéneuc", "Yann-Gaël Guéhéneuc"
    ];
    return speakersWithPages.includes(speakerName);
  };

  const getDetailPageLink = (speakerName: string) => {
    const speakerMap: { [key: string]: string } = {
      "Dr. Moataz Chouchen": "/speakers/moataz-chouchen",
      "Moataz Chouchen": "/speakers/moataz-chouchen",
      "Pr. Bruce R. Maxim": "/speakers/bruce-maxim",
      "Pr. Bruce Maxim": "/speakers/bruce-maxim",
      "Bruce Maxim": "/speakers/bruce-maxim",
      "Pr. Michel Chaudron": "/speakers/michel-chaudron",
      "Michel Chaudron": "/speakers/michel-chaudron",
      "Pr. Lionel Briand": "/speakers/lionel-briand",
      "Lionel Briand": "/speakers/lionel-briand",
      "Pr. Walid Maalej": "/speakers/walid-maalej",
      "Walid Maalej": "/speakers/walid-maalej",
      "Pr. Simon Peyton Jones": "/speakers/simon-peyton-jones",
      "Simon Peyton Jones": "/speakers/simon-peyton-jones",
      "Pr. Ahmed E. Hassan": "/speakers/ahmed-hassan",
      "Ahmed E. Hassan": "/speakers/ahmed-hassan",
      "Dr. Fatemeh Fard": "/speakers/fatemeh-fard",
      "Fatemeh Fard": "/speakers/fatemeh-fard",
      "Pr. Raula Gaikovina Kula": "/speakers/raula-kula",
      "Raula Gaikovina Kula": "/speakers/raula-kula",
      "Pr. Katsuro Inoue": "/speakers/katsuro-inoue",
      "Katsuro Inoue": "/speakers/katsuro-inoue",
      "Dr. Sarah Nadi": "/speakers/sarah-nadi",
      "Sarah Nadi": "/speakers/sarah-nadi",
      "Pr. Houari Sahraoui": "/speakers/houari-sahraoui",
      "Houari Sahraoui": "/speakers/houari-sahraoui",
      "Dr. Alvine Boaye Belle": "/speakers/alvine-belle",
      "Dr. Alvine B. Belle": "/speakers/alvine-belle",
      "Alvine B. Belle": "/speakers/alvine-belle",
      "Alvine Boaye Belle": "/speakers/alvine-belle",
      "Dr. Zadia Codabux": "/speakers/zadia-codabux",
      "Zadia Codabux": "/speakers/zadia-codabux",
      "Dr. Mohamed Aymen Saied": "/speakers/mohamed-saied",
      "Mohamed Aymen Saied": "/speakers/mohamed-saied",
      "Ms. Fatima Tambajang": "/speakers/fatima-tambajang",
      "Fatima Tambajang": "/speakers/fatima-tambajang",
      "Dr. Manel Abdellatif": "/speakers/manel-abdellatif",
      "Manel Abdellatif": "/speakers/manel-abdellatif",
      "Pr. Hafedh Mili": "/speakers/hafedh-mili",
      "Hafedh Mili": "/speakers/hafedh-mili",
      "Mr. Prasun Lala": "/speakers/prasun-lala",
      "Prasun Lala": "/speakers/prasun-lala",
      "Pr. Yann-Gaël Guéhéneuc": "/speakers/yann-gael-gueheneuc",
      "Yann-Gaël Guéhéneuc": "/speakers/yann-gael-gueheneuc"
    };
    return speakerMap[speakerName] || null;
  };

  return (
    <section id="program" className="py-20 md:py-32 bg-background">
      <div className="container px-4">
        <div className="max-w-6xl mx-auto space-y-12">
          {/* Header */}
          <div className="text-center space-y-4">
            <h2 className="text-3xl md:text-5xl font-bold">Winter School Program</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-primary to-secondary mx-auto rounded-full" />
            <p className="text-muted-foreground text-lg">
              Four-day intensive program featuring keynotes, workshops, and networking events
            </p>
            {userTimezone !== "Africa/Tunis" && (
              <p className="text-sm text-muted-foreground">
                Times shown in your local timezone
              </p>
            )}
          </div>

          {/* Schedule by Day */}
          {schedule.map((day, dayIndex) => (
            <div key={dayIndex} className="space-y-6">
              <h3 className="text-2xl md:text-3xl font-bold text-primary sticky top-0 bg-background/95 backdrop-blur py-4 z-10 border-b">
                {day.day}
              </h3>
              <div className="space-y-4">
                {day.sessions.map((session, sessionIndex) => {
                  const eventType = getEventType(session.title);
                  const speakerHasPage = session.speaker && hasDetailPage(session.speaker);
                  const detailLink = speakerHasPage ? getDetailPageLink(session.speaker) : null;
                  
                  const cardContent = (
                    <CardContent className="p-4 md:p-6">
                      <div className="flex flex-col md:flex-row gap-4">
                        {/* Time */}
                        <div className="md:w-32 flex-shrink-0">
                          <Badge variant="outline" className="font-mono text-sm">
                            {convertTime(day.day, session.time)}
                          </Badge>
                        </div>
                        
                        {/* Content */}
                        <div className="flex-1 space-y-2">
                          <h4 className={`${eventType !== 'talk' ? 'text-base font-medium' : 'text-lg font-semibold'} ${speakerHasPage ? 'flex items-center gap-2' : ''}`}>
                            {session.title}
                            {speakerHasPage && <ExternalLink className="h-4 w-4 text-primary" />}
                          </h4>
                          
                          {session.speaker && (
                            <p className="text-muted-foreground">
                              <span className="font-medium text-foreground">Speaker:</span> {session.speaker}
                              {speakerHasPage && <span className="text-xs ml-2 text-primary">(Click to view details)</span>}
                            </p>
                          )}
                          
                          {session.description && (
                            <p className="text-sm text-muted-foreground whitespace-pre-line mt-2">
                              {session.description}
                            </p>
                          )}
                        </div>

                        {/* Type Badge */}
                        {session.type && (
                          <div className="flex-shrink-0">
                            <Badge 
                              variant={session.type === "On-site" ? "default" : "secondary"}
                              className="whitespace-nowrap"
                            >
                              {session.type}
                            </Badge>
                          </div>
                        )}
                      </div>
                    </CardContent>
                  );

                  return speakerHasPage && detailLink ? (
                    <Link key={sessionIndex} to={detailLink} className="block">
                      <Card className={`${getEventStyles(eventType)} hover:shadow-xl transition-all hover:-translate-y-1 cursor-pointer`}>
                        {cardContent}
                      </Card>
                    </Link>
                  ) : (
                    <Card key={sessionIndex} className={`${getEventStyles(eventType)} hover:shadow-lg transition-shadow`}>
                      {cardContent}
                    </Card>
                  );
                })}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Program;
