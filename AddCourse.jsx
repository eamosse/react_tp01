import React, { useState } from 'react';
import { Box, TextField, Button, Typography, Container } from '@mui/material';

const AddCourse = () => {
  const [course, setCourse] = useState({
    name: '',
    code: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setCourse(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Course data:', course);
    // Reset form
    setCourse({
      name: '',
      code: ''
    });
  };

  return (
    <Container maxWidth="sm">
      <Box
        component="form"
        onSubmit={handleSubmit}
        sx={{
          display: 'flex',
          flexDirection: 'column',
          gap: 2,
          padding: 3,
          borderRadius: 2,
          boxShadow: 3,
          marginTop: 4,
          backgroundColor: 'white'
        }}
      >
        <Typography variant="h4" component="h1" gutterBottom>
          Add New Course
        </Typography>
        <TextField
          label="Course Name"
          variant="outlined"
          name="name"
          value={course.name}
          onChange={handleChange}
          required
        />
        <TextField
          label="Code"
          variant="outlined"
          name="code"
          value={course.code}
          onChange={handleChange}
          required
        />
        <Button type="submit" variant="contained" color="primary" sx={{ mt: 2 }}>
          Add Course
        </Button>
      </Box>
    </Container>
  );
};

export default AddCourse;
