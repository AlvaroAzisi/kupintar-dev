
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const Index = () => {
  const navigate = useNavigate();

  useEffect(() => {
    // Since we want the landing page at root, redirect from index
    navigate('/', { replace: true });
  }, [navigate]);

  return null;
};

export default Index;
