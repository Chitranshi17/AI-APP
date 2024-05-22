import { Button, Container, TextField, Typography } from "@mui/material";
import React, { useState } from "react";
import PopUp from "../components/PopUp";

const Home = () => {
  const [open, setOpen] = useState(false);
  const [text, setText] = useState("");
  const [suggestedNames, setSuggestedNames] = useState("Loading...");

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const suggestNameFunc = async (text) => {
    const options = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${import.meta.env.VITE_OPENAI_API_KEY}`,
      },
      body: JSON.stringify({
        model: "text-davinci-003",
        prompt:
          "This is my business idea kindly suggest me 10 names for this and please give 2 options in hinglish also" +
          text,
        temperature: 0.5,
        max_tokens: 500,
        top_p: 1.0,
        frequency_penalty: 0.8,
        presence_penalty: 0.0,
      }),
    };

    try {
      const response = await fetch(
        import.meta.env.VITE_OPENAI_API_URL,
        options
      );
      const data = await response.json();
      setSuggestedNames(data.choices[0].text);
      console.log(data.choices[0].text);
      setText("");
    } catch (error) {
      console.log(error);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    suggestNameFunc();
  };

  return (
    <Container sx={{ padding: "80px" }}>
      <Typography sx={{ margin: "20px 0px" }} variant="h4" align="center">
        Find Your Startup Name Here!!
      </Typography>
      <form onSubmit={handleSubmit}>
        <TextField
          fullWidth
          variant="outlined"
          label="Enter Your Business Idea In 100 Words"
          multiline
          rows={6}
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
        <Button
          sx={{ margin: "20px 0px" }}
          type="submit"
          variant="contained"
          fullWidth
          onClick={handleOpen}
        >
          Generate Name
        </Button>
      </form>
      <PopUp
        handleClose={handleClose}
        open={open}
        suggestedNames={suggestedNames}
      />
    </Container>
  );
};

export default Home;
