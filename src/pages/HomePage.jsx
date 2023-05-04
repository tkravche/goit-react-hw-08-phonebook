import { GiNotebook } from 'react-icons/gi';
import Typography from '@mui/material/Typography';

export const HomePage = () => {
  return (
    <main>
      <Typography
        variant="h2"
        sx={{
          fontWeight: '500',
          textAlign: 'center',
          mt: 14,
          color: '#004d40',
        }}
      >
        Welcome to your Phonebook <GiNotebook />
      </Typography>
      <Typography variant="h4" sx={{ textAlign: 'center', mt: 5 }}>
        Enjoy:)
      </Typography>
    </main>
  );
};
