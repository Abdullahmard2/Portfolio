import React, { useEffect, useState, useRef } from "react";
import { useParams } from "react-router-dom";
import projects from "../data/projects";
import { Heading } from "@chakra-ui/react";

function ProjectDetails() {
  const { projectId } = useParams();
  const project = projects.find((p) => p.id === projectId);

  const text = "TTo be continued...";
  const [typedText, setTypedText] = useState("");
  const [isTypingComplete, setIsTypingComplete] = useState(false);

  const indexRef = useRef(0);
  const timeoutRef = useRef(null);

  useEffect(() => {
    setTypedText("");
    setIsTypingComplete(false);
    indexRef.current = 0;

    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }

    const type = () => {
      if (indexRef.current < text.length) {
        setTypedText((prev) => prev + text.charAt(indexRef.current));
        indexRef.current += 1;
        timeoutRef.current = setTimeout(type, 150);
      } else {
        setIsTypingComplete(true);
      }
    };

    type();

    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    };
  }, [text]);

  if (!project) {
    return <Heading>Project not found</Heading>;
  }

  return (
    <>
      {/* Cursor animation */}
      <style>
        {`
          @keyframes cursorBlink {
            0% { opacity: 1; }
            50% { opacity: 0; }
            100% { opacity: 1; }
          }
        `}
      </style>

      <div
        style={{
          padding: "2rem",
          background: `
            radial-gradient(circle at 20% 30%, #12343b 0%, transparent 40%),
            radial-gradient(circle at 80% 70%, #050e10ff 0%, transparent 40%),
            #081a1f
          `,
          color: "white",
          minHeight: "100vh",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <div
          style={{
            display: "flex",
            gap: "16rem",
            alignItems: "flex-start",
          }}
        >
          {/* LEFT COLUMN: Image + Description */}
          <div style={{ maxWidth: "600px", textAlign: "left" }}>
           <img
            src={project.imageSrc}
            alt={project.title}
            style={{
              width: "100%",
              maxWidth: "520px",
              maxHeight: "60vh",
              objectFit: "contain",
              marginBottom: "1.5rem",
              borderRadius: "20px",
              boxShadow: "0 25px 60px rgba(0, 0, 0, 0.65)",
              backgroundColor: "transparent",
            }}/>
            <h1 style={{ marginBottom: "0.5rem" }}>{project.title}</h1>
            <p style={{ lineHeight: "1.6" }}>{project.description}</p>
          </div>

          {/* RIGHT COLUMN: Typewriter*/}
          <div
            style={{
              fontSize: "3rem",
              fontWeight: "bold",
              whiteSpace: "nowrap",
              textShadow: "12px 12px 12px black",
              alignSelf: "center",
              display: "flex",
              alignItems: "center",
            }}
          >
            {typedText}

            {/* Cursor- Seperate element so that only the cursor blinks and not the whole text */}
            {isTypingComplete && (
              <span
                style={{
                  marginLeft: "6px",
                  width: "4px",
                  height: "3.2rem",
                  backgroundColor: "white",
                  animation: "cursorBlink 1s step-end infinite",
                }}
              />
            )}
          </div>
        </div>
      </div>
    </>
  );
}

export default ProjectDetails;