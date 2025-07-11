import { Card, CardContent, Typography, Chip, Box, IconButton } from "@mui/material";
import EmailIcon from '@mui/icons-material/Email';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

const portfolioData = {
  name: "Nadav Horowitz",
  location: "Bellevue, WA",
  phone: "425-442-4414",
  email: "NadavHorowitz@gmail.com",
  linkedin: "https://www.linkedin.com/in/YOUR_LINKEDIN/",
  github: "https://github.com/YOUR_GITHUB/",
  objective:
    "Computer Science graduate with 6 months of real-world full stack software engineering experience and a passion for programming seeking a role at a major tech company.",
  experience: [
    {
      title: "Associate Software Development Engineer I",
      company: "Sinclair Digital",
      date: "January 2025 – July 2025",
      type: "Contract",
      description: [
        "Authored, architected, and led a small team of entry-level engineers in developing an interactive web application using React.js, AWS (API Gateway, Lambda, DynamoDB), Terraform, and GitLab CI/CD.",
        "Mentored interns and junior developers, and reviewed submitted code for quality and consistency."
      ]
    }
  ],
  education: [
    {
      degree: "BS Computer Science, Cum Laude",
      school: "Bellevue College",
      date: "June 2024",
      gpa: "4.0 GPA"
    },
    {
      degree: "BS Chemistry",
      school: "University of Oregon",
      date: "January 2019"
    }
  ],
  skills: [
    "AWS", "Bash", "C/C++", "CI/CD", "CSS", "C#", "Git", "HTML", "Java",
    "JavaScript", "Kotlin", "Node.js", "PHP", "Python", "React.js",
    "SQL", "Tailwind", "Terraform", "TypeScript"
  ],
  projects: [
    {
      name: "IoT Arduino Mailbox Detector",
      type: "Independent",
      description:
        "IoT project using an ESP32 microcontroller and Arduino ultrasonic sensor to detect physical mail and send email notifications via AWS.",
      techStack: ["AWS", "C++", "ESP32", "HTTPS"]
    },
    {
      name: "Microsoft 365 License Bundle Optimization Tool",
      type: "Group (Full Stack)",
      description:
        "3-Tier Web App storing Microsoft products in Azure SQL DB, using React.js for user input and PHP for business logic to recommend bundles.",
      techStack: ["Azure SQL DB", "PHP", "React.js"]
    },
    {
      name: "Swiss Army Knife Android Application",
      type: "Independent",
      description:
        "Learning project with REST API calls, AWS integration, and Android push notifications.",
      techStack: ["AWS", "Kotlin"]
    }
  ]
};

export default function HomePage(){
  return (
    <Box sx={{ maxWidth: 800, mx: "auto", p: 4 }}>
      <Box sx={{ textAlign: "center", mb: 4 }}>
        <Typography variant="h3" gutterBottom>{portfolioData.name}</Typography>
        <Typography variant="subtitle1" gutterBottom>{portfolioData.location}</Typography>
        <Box>
          <IconButton href={`mailto:${portfolioData.email}`}><EmailIcon /></IconButton>
          <IconButton href={portfolioData.github}><GitHubIcon /></IconButton>
          <IconButton href={portfolioData.linkedin}><LinkedInIcon /></IconButton>
        </Box>
      </Box>

      <Card sx={{ mb: 4 }}>
        <CardContent>
          <Typography variant="h5">Career Objective</Typography>
          <Typography variant="body1" mt={2}>{portfolioData.objective}</Typography>
        </CardContent>
      </Card>

      <Card sx={{ mb: 4 }}>
        <CardContent>
          <Typography variant="h5">Experience</Typography>
          {portfolioData.experience.map((exp, i) => (
            <Box key={i} mt={2}>
              <Typography variant="h6">{exp.title} – {exp.company}</Typography>
              <Typography variant="subtitle2" color="textSecondary">{exp.date} ({exp.type})</Typography>
              <ul>
                {exp.description.map((d, j) => (
                  <li key={j}><Typography variant="body2">{d}</Typography></li>
                ))}
              </ul>
            </Box>
          ))}
        </CardContent>
      </Card>

      <Card sx={{ mb: 4 }}>
        <CardContent>
          <Typography variant="h5">Education</Typography>
          {portfolioData.education.map((edu, i) => (
            <Box key={i} mt={2}>
              <Typography variant="h6">{edu.degree}</Typography>
              <Typography>{edu.school} – {edu.date}</Typography>
              {edu.gpa && <Typography>{edu.gpa}</Typography>}
            </Box>
          ))}
        </CardContent>
      </Card>

      <Card sx={{ mb: 4 }}>
        <CardContent>
          <Typography variant="h5">Skills</Typography>
          <Box sx={{ mt: 2, display: 'flex', flexWrap: 'wrap', gap: 1 }}>
            {portfolioData.skills.map((skill, i) => (
               <Chip 
                key={i} 
                label={skill} 
                sx={{
                  transition: 'background-color 0.3s ease',
                  '&:hover': {
                    backgroundColor: 'primary.light',
                    color: 'white'
                  }
                }} 
              />
            ))}
          </Box>
        </CardContent>
      </Card>

      <Card sx={{ mb: 4 }}>
        <CardContent>
          <Typography variant="h5">Projects</Typography>
          {portfolioData.projects.map((proj, i) => (
            <Box key={i} mt={2}>
              <Typography variant="h6">{proj.name} – {proj.type}</Typography>
              <Typography variant="body2" mt={1}>{proj.description}</Typography>
              <Typography variant="caption" display="block" mt={1}>
                <strong>Tech Stack:</strong> {proj.techStack.join(", ")}
              </Typography>
            </Box>
          ))}
        </CardContent>
      </Card>
    </Box>
  );
}


