import { useState } from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { PROFILE_URL } from '../constants/api';

function AvatarUpdateForm({ onAvatarUpdate }) {
  const [avatar, setAvatar] = useState('');

  const handleSubmit = async (event) => {
    event.preventDefault();
    
    const response = await fetch(PROFILE_URL, {
      method: 'PUT',
      body: JSON.stringify({ avatar_url: avatar }),
      headers: {
        'Content-Type': 'application/json',
      },
    });

    if (!response.ok) {
        console.error('Error updating avatar URL:', response.status);
      } else {
        
        onAvatarUpdate();
        
        setAvatar('');

      }
    };

    return (
        <Form onSubmit={handleSubmit}>
          <Form.Group controlId="formImageUrl">
            <Form.Label>Avatar URL: </Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter new avatar URL"
              value={avatar}
              onChange={(event) => setAvatarUrl(event.target.value)}
            />
          </Form.Group>
          <Button variant="primary" type="submit">
            Update
          </Button>
        </Form>
      );
    }

export default AvatarUpdateForm;