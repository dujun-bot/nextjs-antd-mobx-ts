import { useEffect } from 'react';
import { useRouter } from 'next/router';

const Home = () => {
  const route = useRouter();
  useEffect(() => {
    route.push('/metadata/originData');
  }, []);
  return null;
};
export default Home;
