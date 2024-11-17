

import { useAuth } from './AuthContext';
import { useRouter } from 'next/navigation';
import { useEffect } from 'react';
import { Box, Spinner } from '@chakra-ui/react';

export default function PrivateRoute({ children }) {
  const { user, loading } = useAuth();
  const router = useRouter();

  useEffect(() => {
    if (!loading && !user) {
      router.push('/'); // Redirect to homepage if not authenticated
    }
  }, [user, loading, router]);

  if (loading) {
    return (
      <Box
        display="flex"
        alignItems="center"
        justifyContent="center"
        height="100vh"
        bg="gray.50"
      >
        <Spinner size="xl" />
      </Box>
    );
  }

  return user ? children : null;
}
