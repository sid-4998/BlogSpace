import { Alert, Button, Label, Spinner, TextInput } from 'flowbite-react';
import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

export default function SignIn() {
  const [formData, setFormData] = useState({});
  const [errorMessage, setErrorMessage] = useState(null);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value.trim()}); 
  }
  const handleSubmit = async (e) => {
    e.preventDefault();
    if(!formData.email || !formData.password) {
      return setErrorMessage('Please fill out all fields!');
    }
    try {
      setLoading(true);
      setErrorMessage(null);
      const res = await fetch('/api/auth/signin', {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify(formData),
      });
      const data = await res.json();
      if(data.success === false) {
        return setErrorMessage(data.message);
      }
      setLoading(false);
      if(res.ok) {
        navigate('/');
      }
    } catch(error) {
      setLoading(false);
      setErrorMessage(error.message);
    }
  };
  return (
    <div className = 'min-h-screen mt-20'>
      <div className='flex p-3 max-w-3xl mx-auto flex-col md:flex-row md:items-center gap-5'>
        <div className='flex-1'>
        <Link to = '/' className='font-bold dark:text-white text-4xl'>
            <span className='px-2 py-1 bg-gradient-to-r from-yellow-700 via-orange-500 to-red-400 rounded-lg text-white'>Blog</span>
            Space
        </Link>
        <p className='text-sm mt-5'>
          Welcome to BlogSpace! Sign In to share your stories, connect with others, and dive into a world of creative possibilities.
        </p>
        </div>
        <div className='flex-1'>
          <form className='flex flex-col gap-4' onSubmit={handleSubmit}>
            <div>
              <Label value='Your email' />
              <TextInput 
                 type='email'
                 placeholder='Email'
                 id='email'
                 onChange = {handleChange}                 
              />
            </div>
            <div>
              <Label value='Your password' />
              <TextInput 
                 type='password'
                 placeholder='***********'
                 id='password'
                 onChange = {handleChange}                  
              />
            </div>
            <Button gradientDuoTone = 'pinkToOrange' outline type='submit' disabled={loading}>
              {loading ? (
                  <>
                    <Spinner size='sm'/>
                    <span className='pl-3'>Loading...</span>
                  </>
                ) : (
                  'Sign In'
                )}
            </Button>
          </form>
          <div className='flex gap-2 text-sm mt-5'>
            <span>Don't have an account?</span>
            <Link to='/signup' className='text-blue-500'>
              SignUp
            </Link>
          </div>
            {errorMessage && (
              <Alert className='mt-5' color='failure'>
                {errorMessage}
              </Alert>
            )}
        </div>
      </div>
    </div>
  )
}

