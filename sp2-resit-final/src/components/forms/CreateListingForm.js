import { useState } from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

function CreateListingForm({ onListingCreate }) {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [endsAt, setEndsAt] = useState('');
  const [media, setMedia] = useState('');

  const handleSubmit = async (event) => {
    event.preventDefault();
    
    const response = await fetch(LISTINGS_URL, {
      method: 'POST',
      body: JSON.stringify({ title, description, ends_at: endsAt, media }),
      headers: {
        'Content-Type': 'application/json',
      },
    });

    if (!response.ok) {
      console.error('Error creating listing:', response.status);
    } else {
      
      onListingCreate();
      
      setTitle('');
      setDescription('');
      setEndsAt('');
      setMedia('');
    }
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Form.Group controlId="formTitle">
        <Form.Label>Title</Form.Label>
        <Form.Control
          type="text"
          placeholder="Enter listing name"
          value={title}
          onChange={(event) => setTitle(event.target.value)}
        />
      </Form.Group>
      <Form.Group controlId="formEndsAt">
        <Form.Label>Deadline</Form.Label>
        <Form.Control
          type="text"          
          placeholder="Enter bidding deadline"
          value={endsAt}
          onChange={(event) => setEndsAt(event.target.value)}
        />
      </Form.Group>
      <Form.Group controlId="formDescription">
        <Form.Label>Description</Form.Label>
        <Form.Control
          as="textarea"
          placeholder="Enter listing description"
          value={description}
          onChange={(event) => setDescription(event.target.value)}
        />
      </Form.Group>      
      <Form.Group controlId="formMedia">
        <Form.Label>Image URL: </Form.Label>
        <Form.Control
          type="text"          
          placeholder="Enter listing image url"
          value={media}
          onChange={(event) => setMedia(event.target.value)}
        />
      </Form.Group>
      <Button variant="primary" type="submit" className='proceed'>
        Submit
      </Button>
    </Form>
  );
}

export default CreateListingForm;