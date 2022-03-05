import React from 'react';
import NavMenu from '../../components/nav-menu/nav';
import styled from 'styled-components';
import heroImg from '../../assets/white-background-shape-v2.png';
import footerImg from '../../assets/footer.png'
import './faqs-style.scss';

import { makeStyles } from '@material-ui/core/styles';
import Accordion from '@material-ui/core/Accordion';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
  },
  heading: {
    fontSize: theme.typography.pxToRem(15),
    fontWeight: theme.typography.fontWeightRegular,
  },
}));

const HeroShapeBg = styled.div`
  background: url(${heroImg});
`;

export default function Faqs() {
  const classes = useStyles();
  return (
    <div className="mainPage">
      <HeroShapeBg className='HeroShapeBg'/>
      <section className='bifold-wrapper'>
        <NavMenu />
        <main className='buifold-content__pages'>
          <div className='pages-title'>
            <h1>Frequently asked questions</h1>
          </div>
          <div className='pages-wrapper'>
            <div className='faq__title'>
              <h2>Below is a list of our most frequently asked questions.</h2>
            </div>
            <div className='faq__content'>
              <div className={classes.root}>
                <Accordion>
                  <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel1a-content"
                    id="panel1a-header"
                  >
                    <Typography className={classes.heading}>Can you supply matching windows & doors?</Typography>
                  </AccordionSummary>
                  <AccordionDetails>
                    <Typography>
                    We can supply windows and doors designed to match and connect to aluminium and upvc bifold doors.  We are currently unable to provide timber windows.
                    </Typography>
                  </AccordionDetails>
                </Accordion>
                <Accordion>
                  <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel2a-content"
                    id="panel2a-header"
                  >
                    <Typography className={classes.heading}>Do your bi fold doors comply with building regulations?</Typography>
                  </AccordionSummary>
                  <AccordionDetails>
                    <Typography>
                    Yes, they are fully compliant with document L of the building regulations.
                    </Typography>
                  </AccordionDetails>
                </Accordion>
                <Accordion>
                  <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel2a-content"
                    id="panel3a-header"
                  >
                    <Typography className={classes.heading}>Can I have a low threshold that is then flush with my floor?</Typography>
                  </AccordionSummary>
                  <AccordionDetails>
                    <Typography>
                    All our bifolding doors can be specified with a low threshold.  Please refer to the ‘Threshold Options’ page for the relevant door for full details.
                    </Typography>
                  </AccordionDetails>
                </Accordion>
                <Accordion>
                  <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel4a-content"
                    id="panel4a-header"
                  >
                    <Typography className={classes.heading}>What are the style options?</Typography>
                  </AccordionSummary>
                  <AccordionDetails>
                    <Typography>
                    Individual sash widths vary from the type of door selected and the configuration of the door itself.  Full details are shown on the ‘Technical Details’ page for each type of door.
                    </Typography>
                  </AccordionDetails>
                </Accordion>
                <Accordion>
                  <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel5a-content"
                    id="panel5a-header"
                  >
                    <Typography className={classes.heading}>What are trickle vents and do I need them?</Typography>
                  </AccordionSummary>
                  <AccordionDetails>
                    <Typography>
                    If your bifold door is being installed into a new external opening you will probably require trickle vents fitted unless you have windows in the same room that already have trickle vents fitted. They are designed to allow through ventilation without the need to open a window or door. Building regulations require 8000mm2 of trickle ventilation into a habitable room.
                    </Typography>
                  </AccordionDetails>
                </Accordion>
                <Accordion>
                  <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel6a-content"
                    id="panel6a-header"
                  >
                    <Typography className={classes.heading}>What is a traffic door?</Typography>
                  </AccordionSummary>
                  <AccordionDetails>
                    <Typography>
                    Traffic doors are available on some door styles and provide a door leaf that can be opened as a normal hinged door for ease of access. They are supplied fitted with a high security hook bolt locking system, operated by lever/lever handles and a profile lock cylinder enabling access from outside.
                    </Typography>
                  </AccordionDetails>
                </Accordion>
                <Accordion>
                  <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel2a-content"
                    id="panel7a-header"
                  >
                    <Typography className={classes.heading}>What is the maximum height of your folding doors?</Typography>
                  </AccordionSummary>
                  <AccordionDetails>
                    <Typography>
                    Timber and aluminium bifolding doors are available up to a maximum of 2.5 metres in height. Fixed glazed top lights can be supplied where the aperture is taller.  Timberlook pvcu folding sliding doors are available up to a maximum overall height of 2.2 metres.
                    </Typography>
                  </AccordionDetails>
                </Accordion>
                <Accordion>
                  <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel2a-content"
                    id="panel8a-header"
                  >
                    <Typography className={classes.heading}>What is your guarantee?</Typography>
                  </AccordionSummary>
                  <AccordionDetails>
                    <Typography>
                    All double glazed sealed units are warranted for ten years against failure of the glazing.  Aluminium and upvc bifolding doors are warranted for ten years against faulty workmanship.  Timber doors carry a ten year warranty for structural integrity on factory finished doors and a two year warranty against cracking, peeling or blistering of factory applied finishes. All doors are subject to a one year warranty for all moving parts including handles.
                    </Typography>
                  </AccordionDetails>
                </Accordion>
                <Accordion>
                  <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel9a-content"
                    id="panel9a-header"
                  >
                    <Typography className={classes.heading}>What maintenance is required?</Typography>
                  </AccordionSummary>
                  <AccordionDetails>
                    <Typography>
                    Our bifold doors are designed to be virtually maintenance free. Just the occassional wipe with a damp cloth and lubrication of hinges and lock is all that is required.
                    </Typography>
                  </AccordionDetails>
                </Accordion>
                <Accordion>
                  <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel10a-content"
                    id="panel10a-header"
                  >
                    <Typography className={classes.heading}>Are your doors supplied in kit form or fully assembled?</Typography>
                  </AccordionSummary>
                  <AccordionDetails>
                    <Typography>
                    Aluminium and upvc bifolding doors are fully assembled in the factory although due to transport restrictions some larger doors are supplied with the outerframe in kit form for assembly on site. All doors can be supplied this way on request if you have limited site access.  All timber doors are supplied in kit form and are assembled into the aperture.
                    </Typography>
                  </AccordionDetails>
                </Accordion>
                <Accordion>
                  <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel11a-content"
                    id="panel11a-header"
                  >
                    <Typography className={classes.heading}>Are your doors really suitable to DIY installation?</Typography>
                  </AccordionSummary>
                  <AccordionDetails>
                    <Typography>
                    Many of our doors are fitted by homeowners or their builders. If you are a DIY enthusiast you should be able to install the door with the help of a willing volunteer.
                    </Typography>
                  </AccordionDetails>
                </Accordion>
                <Accordion>
                  <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel2a-content"
                    id="panel12a-header"
                  >
                    <Typography className={classes.heading}>Do you install?</Typography>
                  </AccordionSummary>
                  <AccordionDetails>
                    <Typography>
                    Depending on your location we may be able to introduce you to a professional installer who will survey and install your door for you. Payment for this service is made directly to the installer.
                    </Typography>
                  </AccordionDetails>
                </Accordion>
                <Accordion>
                  <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel2a-content"
                    id="panel13a-header"
                  >
                    <Typography className={classes.heading}>What are RAL Colours?</Typography>
                  </AccordionSummary>
                  <AccordionDetails>
                    <Typography>
                    RAL colours are the industry standard colours for painting aluminium. Aluminium and timber bifolding doors can be painted to any RAL colour code and a chart is available for download from the site.
                    </Typography>
                  </AccordionDetails>
                </Accordion>
                <Accordion>
                  <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel2a-content"
                    id="panel14a-header"
                  >
                    <Typography className={classes.heading}>What is a 'U' Value?</Typography>
                  </AccordionSummary>
                  <AccordionDetails>
                    <Typography>
                    U value is the measurement of heat transferred through a product and is commonly used to measure heat loss. The lower the U value the lower the heat loss.
                    </Typography>
                  </AccordionDetails>
                </Accordion>
                <Accordion>
                  <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel15a-content"
                    id="panel15a-header"
                  >
                    <Typography className={classes.heading}>What type of double glazing do you supply?</Typography>
                  </AccordionSummary>
                  <AccordionDetails>
                    <Typography>
                    Our Bifold doors are supplied with 28mm toughened argon filled Low E double glazed units as standard. We can also supply any other requirement such as self cleaning glass, solar control glass or laminated glass. Decorative glass such as lead or Georgian bar designs can also be provided.
                    </Typography>
                  </AccordionDetails>
                </Accordion>
                <Accordion>
                  <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel2a-content"
                    id="panel16a-header"
                  >
                    <Typography className={classes.heading}>If I don't want a traffic door, can the door be opened from the outside?</Typography>
                  </AccordionSummary>
                  <AccordionDetails>
                    <Typography>
                    Doors supplied without a traffic door can only be opened from the inside by operating the high security shoot bolt locking system by turning the handle(s) fitted to the meeting stiles.
                    </Typography>
                  </AccordionDetails>
                </Accordion>
              </div>
            </div>
          </div>
        </main>
      </section>
      <footer className="footer">
        <p>Powered by</p>
        <a href="https://essexwebdesignstudio.com/bifold-builder/" target="_blank">
          <img class="footer__logo" src={footerImg} alt="logo"></img>
        </a>
      </footer>
    </div>
  )
}
