import { Box } from '@mui/material';
import { MediaCard } from 'app/components/MediaCard'

export default function Home() {
  return (
    <Box
      display="grid"
      sx={{
        placeItems: 'center',
        minHeight: '100vh'
      }}
    >
      <MediaCard />
    </Box>
  );
}
