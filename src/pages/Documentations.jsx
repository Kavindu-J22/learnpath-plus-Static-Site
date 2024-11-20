/* eslint-disable react/prop-types */
import DescriptionIcon from '@mui/icons-material/Description';
import PictureAsPdfIcon from '@mui/icons-material/PictureAsPdf';
import {
  Card,
  CardContent,
  CardHeader,
  Grid,
  Typography,
  Box,
  Button,
} from '@mui/material';
import { styled } from '@mui/system';

// Styled components for consistent card size
// eslint-disable-next-line no-unused-vars
const DocumentCard = styled(Card)(({ theme }) => ({
  borderRadius: '12px',
  boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)',
  transition: 'transform 0.3s, box-shadow 0.3s',
  height: '100%', // Ensure all cards are the same height
  '&:hover': {
    transform: 'scale(1.03)',
    boxShadow: '0 6px 16px rgba(0, 0, 0, 0.15)',
  },
}));

const DocumentSection = ({ title, description, files }) => (
  <Grid item xs={12} sm={6} md={4} lg={3}>
    <DocumentCard>
      <CardHeader
        title={
          <Typography variant="h6" style={{ fontWeight: 'bold', color: '#0073e6' }}>
            {title}
          </Typography>
        }
        style={{ backgroundColor: 'rgb(200, 221, 228)' }}
      />
      <CardContent>
        <Typography variant="body2" color="text.secondary" marginBottom="1rem">
          {description}
        </Typography>
        <Box sx={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
          {files.map((file, index) => (
            <Button
              key={index}
              variant="outlined"
              startIcon={<PictureAsPdfIcon sx={{ color: '#f44336' }} />}
              href={file.path}
              target="_blank"
              rel="noopener noreferrer"
              sx={{ justifyContent: 'flex-start', color: '#0073e6', textTransform: 'none' }}
            >
              {file.name}
            </Button>
          ))}
        </Box>
      </CardContent>
    </DocumentCard>
  </Grid>
);

function DocumentationPage() {
  return (
    <Box sx={{ margin: '2rem', fontFamily: 'Arial, sans-serif', lineHeight: '1.6' }}>
      <Typography variant="h4" textAlign="center" marginBottom="2rem" color="#333">
        <DescriptionIcon sx={{ color: '#0073e6', verticalAlign: 'middle', marginRight: '0.5rem' }} />
        Documentation
      </Typography>

      <Grid container spacing={3}>
        <DocumentSection title="Proposal Reports" description="These documents outline the proposals submitted for review and approval." files={[
          { name: "Proposal Report Jayasinghe K.A.K.N", path: "/documents/Proposal_Report_Jayasinghe_KAKN.pdf" },
          { name: "Proposal Report Nishshanka N.A.G.A.A", path: "/documents/Proposal_Report_Nishshanka_NAGAA.pdf" },
          { name: "Proposal Report Nishshanka N.A.P.K.R", path: "/documents/Proposal_Report_Nishshanka_NAPKR.pdf" },
          { name: "Proposal Report Abeykoon R.M.S.P", path: "/documents/Proposal_Report_Abeykoon_RMSP.pdf" }
        ]} />

        <DocumentSection title="Status Documents 01" description="Status updates regarding ongoing projects and milestones achieved." files={[
          { name: "Status Document 01 Jayasinghe K.A.K.N", path: "/documents/Status_Document_01_Jayasinghe_KAKN.pdf" },
          { name: "Status Document 01 Nishshanka N.A.G.A.A", path: "/documents/Status_Document_01_Nishshanka_NAGAA.pdf" },
          { name: "Status Document 01 Nishshanka N.A.P.K.R", path: "/documents/Status_Document_01_Nishshanka_NAPKR.pdf" },
          { name: "Status Document 01 Abeykoon R.M.S.P", path: "/documents/Status_Document_01_Abeykoon_RMSP.pdf" }
        ]} />

        <DocumentSection title="Status Documents 02" description="Further updates and evaluations of project progress." files={[
          { name: "Status Document 02 Jayasinghe K.A.K.N", path: "/documents/Status_Document_02_Jayasinghe_KAKN.pdf" },
          { name: "Status Document 02 Nishshanka N.A.G.A.A", path: "/documents/Status_Document_02_Nishshanka_NAGAA.pdf" },
          { name: "Status Document 02 Nishshanka N.A.P.K.R", path: "/documents/Status_Document_02_Nishshanka_NAPKR.pdf" },
          { name: "Status Document 02 Abeykoon R.M.S.P", path: "/documents/Status_Document_02_Abeykoon_RMSP.pdf" }
        ]} />

        <DocumentSection title="Research Thesis" description="Theses produced during research projects undertaken by the team." files={[
          { name: "Final Group Thesis", path: "/documents/Final_Group_Thesis.pdf" },
          { name: "Research Thesis Jayasinghe K.A.K.N", path: "/documents/Research_Thesis_Jayasinghe_KAKN.pdf" },
          { name: "Research Thesis Nishshanka N.A.G.A.A", path: "/documents/Research_Thesis_Nishshanka_NAGAA.pdf" },
          { name: "Research Thesis Nishshanka N.A.P.K.R", path: "/documents/Research_Thesis_Nishshanka_NAPKR.pdf" },
          { name: "Research Thesis Abeykoon R.M.S.P", path: "/documents/Research_Thesis_Abeykoon_RMSP.pdf" }
        ]} />

        <DocumentSection title="Presentations" description="Presentations used to communicate project progress and findings." files={[
          { name: "Proposal Presentation", path: "/documents/Proposal_Presentation.pptx" },
          { name: "Progress Presentation 1", path: "/documents/Progress_Presentation_1.pptx" },
          { name: "Progress Presentation 2", path: "/documents/Progress_Presentation_2.pptx" },
          { name: "Poster Preparation", path: "/documents/Poster_Preparation.ppt" },
          { name: "Final Presentation", path: "/documents/Final_Presentation.pptx" }
        ]} />

        <DocumentSection title="Research Paper" description="Published research paper that documents the findings of our studies." files={[
          { name: "Research Paper", path: "/documents/Research_Paper.pdf" }
        ]} />

      </Grid>
    </Box>
  );
}

export default DocumentationPage;
