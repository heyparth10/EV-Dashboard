import { Box, useTheme } from "@mui/material";
import Header from "../../components/Header";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { tokens } from "../../theme";

const FAQ = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  return (
    <Box m="20px">
      <Header title="FAQ" subtitle="Frequently Asked Questions Page" />

      {/* Question 1 */}
      <Accordion defaultExpanded>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography color={colors.greenAccent[500]} variant="h5">
            What is the most popular type of Electric Vehicle (EV) in the dataset?
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Battery Electric Vehicles (BEVs) are the most popular type in the dataset, 
            accounting for 39,461 entries, compared to 10,539 Plug-in Hybrid Vehicles (PHEVs).
          </Typography>
        </AccordionDetails>
      </Accordion>

      {/* Question 2 */}
      <Accordion defaultExpanded>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography color={colors.greenAccent[500]} variant="h5">
            Which county and city have the highest number of Electric Vehicles?
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Yakima County has the highest number of EVs. Within Yakima County, 
            the city of Yakima leads with 205 vehicles, followed by Selah with 38 vehicles.
          </Typography>
        </AccordionDetails>
      </Accordion>

      {/* Question 3 */}
      <Accordion defaultExpanded>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography color={colors.greenAccent[500]} variant="h5">
            What is the range of Electric Vehicle model years in the dataset?
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            The dataset includes Electric Vehicle model years spanning various years, 1998 - 2020
            giving a comprehensive view of both older and newer Cars.
          </Typography>
        </AccordionDetails>
      </Accordion>

      {/* Question 4 */}
      <Accordion defaultExpanded>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography color={colors.greenAccent[500]} variant="h5">
            Are all Electric Vehicles in the dataset eligible for Clean Alternative Fuel Vehicle (CAFV) status?
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Not all vehicles are eligible for CAFV status. The eligibility is determined 
            by factors such as the vehicle type and compliance with specific regulations.
          </Typography>
        </AccordionDetails>
      </Accordion>

      {/* Question 5 */}
      <Accordion defaultExpanded>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography color={colors.greenAccent[500]} variant="h5">
            What is the distribution of Electric Vehicle makes in the dataset?
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            The dataset includes a diverse range of Electric Vehicle makes. The top 10 makes are 
            visualized in the dashboard's bar chart, highlighting brands with the highest number of vehicles.
          </Typography>
        </AccordionDetails>
      </Accordion>
    </Box>
  );
};

export default FAQ;
