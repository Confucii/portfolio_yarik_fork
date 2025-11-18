import { Link } from "react-router-dom";
import { Box, Card, CardMedia, Typography } from "@mui/material";
import { escapeProjectId } from "../utils/projectId";

function ProjectThumbnail({ project }) {
  if (!project.thumbnail) return null;

  return (
    <Card
      component={Link}
      to={`/category/${project.category}#${escapeProjectId(project.id)}`}
      sx={{
        position: "relative",
        width: "100%",
        aspectRatio: "1 / 1",
        textDecoration: "none",
        cursor: "pointer",

        // --- SAFARI-SAFE GRADIENT OVERLAY ---
        "&::after": {
          content: '""',
          position: "absolute",
          bottom: 0,
          left: 0,
          right: 0,
          height: "25%", // gradient height (you asked for 25%)
          borderRadius: 1,
          pointerEvents: "none",

          backgroundImage:
            "linear-gradient(to top, rgba(26, 21, 34, 0.95), rgba(26, 21, 34, 0.8), rgba(26, 21, 34, 0))",
          WebkitBackgroundImage:
            "linear-gradient(to top, rgba(26, 21, 34, 0.95), rgba(26, 21, 34, 0.8), rgba(26, 21, 34, 0))",
        },
      }}
    >
      <CardMedia
        component="img"
        image={`${import.meta.env.BASE_URL}${project.thumbnail}`}
        alt={project.title}
        sx={{
          width: "100%",
          height: "100%",
          objectFit: "cover",
          borderRadius: 1,
        }}
        loading="lazy"
      />

      {/* TEXT OVERLAY — NOT SQUASHED ANYMORE */}
      <Box
        sx={{
          position: "absolute",
          bottom: 0,
          left: 0,
          right: 0,
          zIndex: 2,
          p: 2,
          paddingTop: 4,
        }}
      >
        <Typography
          sx={{
            fontSize: "1rem",
            fontWeight: 500,
            color: "primary.main",
            textShadow:
              "0 2px 4px rgba(0, 0, 0, 0.8), 0 1px 2px rgba(0, 0, 0, 0.6)",
            WebkitTextShadow:
              "0 2px 4px rgba(0, 0, 0, 0.8), 0 1px 2px rgba(0, 0, 0, 0.6)",
          }}
        >
          {project.title}
        </Typography>
      </Box>
    </Card>
  );
}

export default ProjectThumbnail;
