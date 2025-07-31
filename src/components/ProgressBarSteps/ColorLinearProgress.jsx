// Arquivo: ../ProgressBarSteps/ColorLinearProgress.jsx
import React from 'react';
import LinearProgress from '@mui/material/LinearProgress';
import Stack from '@mui/material/Stack';

// O componente agora aceita a prop "value"
export default function ColorLinearProgress({ value }) {
  return (
    <Stack sx={{ width: '100%', color: 'grey.500' }} spacing={2}>
      <LinearProgress
        // Use a variante "determinate" para mostrar o progresso
        variant="determinate"
        // Passe o valor recebido pela prop
        value={value}
        color="info"
        sx={{
          height: 10,
          borderRadius: 5,
        }}
      />
    </Stack>
  );
}