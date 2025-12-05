    import React, { useState } from 'react';
    import { Box, TextField, Button, Typography, Container } from '@mui/material';

    const AddCourse = () => {
    const formRef = React.useRef(null);


    const handleSubmit = (e) => {
        e.preventDefault();
        const formData = new FormData(formRef.current);
        const courseData = {
            name: formData.get('name'),
            code: formData.get('code')
        };
        console.log('Course data:', courseData);
        formRef.current.reset();
    };

    return (
        <Container maxWidth="sm">
        <Box
            component="form"
            onSubmit={handleSubmit}
            ref={formRef}
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
            onChange={handleChange}
            required
            />
            <TextField
            label="Code"
            variant="outlined"
            name="code"
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
