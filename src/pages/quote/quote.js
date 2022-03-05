import React from 'react'
import { useForm, useStep } from 'react-hooks-helper'
import { Link } from 'react-router-dom'

import NavMenu from '../../components/nav-menu/nav'
import styled from 'styled-components'

import SimpleReactLightbox from 'simple-react-lightbox';
import { SRLWrapper } from "simple-react-lightbox"

import twoPanlesGrayLeft from '../../assets/videos/2panels-grey-all-folding-left.mp4'
import twoPanlesGrayRight from '../../assets/videos/2panels-grey-all-folding-right.mp4'
import twoPanlesWhiteLeft from '../../assets/videos/2panels-white-all-folding-left.mp4'
import twoPanlesWhiteRight from '../../assets/videos/2panels-white-all-folding-right.mp4'

import threeGrayPanelsLeft from '../../assets/videos/3panels-grey-all-folding-left.mp4'
import threeGrayPanelsRight from '../../assets/videos/3panels-grey-all-folding-right.mp4'
import threePanelsGrey1Left2Right from '../../assets/videos/3panels-grey-1xleft&2xright.mp4'
import threePanelsGrey2Left1Right from '../../assets/videos/3panels-grey-2xleft&1xright.mp4'

import threeWhitePanelsLeft from '../../assets/videos/3panels-white-all-folding-left.mp4'
import threeWhitePanelsRight from '../../assets/videos/3panels-white-all-folding-right.mp4'
import threePanelsWhite1Left2Right from '../../assets/videos/3panels-white-1xleft&2xright.mp4'
import threePanelsWhite2Left1Right from '../../assets/videos/3panels-white-2xleft&1xright.mp4'

import fourGrayPanelsLeft from '../../assets/videos/4panels-grey-all-folding-left.mp4'
import fourGrayPanelsRight from '../../assets/videos/4panels-grey-all-folding-right.mp4'
import fourPanelsGrey1Left3Right from '../../assets/videos/4panels-grey-1xleft&3xright.mp4'
import fourPanelsGrey3Left1Right from '../../assets/videos/4panels-grey-3xleft&1xright.mp4'
import fourPanelsGrey2Left2Right from '../../assets/videos/4panels-grey-2xleft&2xright.mp4'

import fourWhitePanelsLeft from '../../assets/videos/4panels-white-all-folding-left.mp4'
import fourWhitePanelsRight from '../../assets/videos/4panels-white-all-folding-right.mp4'
import fourPanelsWhite1Left3Right from '../../assets/videos/4panels-white-1xleft&3xright.mp4'
import fourPanelsWhite3Left1Right from '../../assets/videos/4panels-white-3xleft&1xright.mp4'
import fourPanelsWhite2Left2Right from '../../assets/videos/4panels-white-2xleft&2xright.mp4'

import fiveGrayPanelsLeft from '../../assets/videos/5panels-grey-all-folding-left.mp4'
import fiveGrayPanelsRight from '../../assets/videos/5panels-grey-all-folding-right.mp4'
import fivePanelsGrey1Left4Right from '../../assets/videos/5panels-grey-1xleft&4xright.mp4'
import fivePanelsGrey2Left3Right from '../../assets/videos/5panels-grey-2xleft&3xright.mp4'
import fivePanelsGrey3Left2Right from '../../assets/videos/5panels-grey-3xleft&2xright.mp4'
import fivePanelsGrey4Left1Right from '../../assets/videos/5panels-grey-4xleft&1xright.mp4'

import fiveWhitePanelsLeft from '../../assets/videos/5panels-white-all-folding-left.mp4'
import fiveWhitePanelsRight from '../../assets/videos/5panels-white-all-folding-right.mp4'
import fivePanelsWhite1Left4Right from '../../assets/videos/5panels-white-1xleft&4xright.mp4'
import fivePanelsWhite2Left3Right from '../../assets/videos/5panels-white-2xleft&3xright.mp4'
import fivePanelsWhite3Left2Right from '../../assets/videos/5panels-white-3xleft&2xright.mp4'
import fivePanelsWhite4Left1Right from '../../assets/videos/5panels-white-4xleft&1xright.mp4'

import sixGrayPanelsLeft from '../../assets/videos/6panels-grey-all-folding-left.mp4'
import sixGrayPanelsRight from '../../assets/videos/6panels-grey-all-folding-right.mp4'
import sixPanelsGrey1Left5Right from '../../assets/videos/6panels-grey-1xleft&5xright.mp4'
import sixPanelsGrey2Left4Right from '../../assets/videos/6panels-grey-2xleft&4xright.mp4'
import sixPanelsGrey3Left3Right from '../../assets/videos/6panels-grey-3xleft&3xright.mp4'
import sixPanelsGrey4Left2Right from '../../assets/videos/6panels-grey-4xleft&2xright.mp4'
import sixPanelsGrey5Left1Right from '../../assets/videos/6panels-grey-5xleft&1xright.mp4'

import sixWhitePanelsLeft from '../../assets/videos/6panels-white-all-folding-left.mp4'
import sixWhitePanelsRight from '../../assets/videos/6panels-white-all-folding-right.mp4'
import sixPanelsWhite1Left5Right from '../../assets/videos/6panels-white-1xleft&5xright.mp4'
import sixPanelsWhite2Left4Right from '../../assets/videos/6panels-white-2xleft&4xright.mp4'
import sixPanelsWhite3Left3Right from '../../assets/videos/6panels-white-3xleft&3xright.mp4'
import sixPanelsWhite4Left2Right from '../../assets/videos/6panels-white-4xleft&2xright.mp4'
import sixPanelsWhite5Left1Right from '../../assets/videos/6panels-white-5xleft&1xright.mp4'

import heroImg from '../../assets/white-background-shape-v2.png'
import foldingIcon from '../../assets/fold-door-icon.svg'
import doorWidthIcon from '../../assets/arrow-left-right.svg'
import doorHeightIcon from '../../assets/arrow-up-down.svg'
import doorPanelIcon from '../../assets/door-panel.svg'
import doorColorIcon from '../../assets/door-color.svg'
import doorHandleIcon from '../../assets/door-handle.svg'
import cillIcon from '../../assets/cill-icon.svg'
import ventsIcon from '../../assets/vents.svg'
import blindsIcon from '../../assets/blinds.svg'
import foldingstyleIcon from '../../assets/folding-style.svg'
import openingstyleIcon from '../../assets/opening-style.svg'
import instalationIcon from '../../assets/instalation.svg'
import CillOptionsIcon from '../../assets/Cill-Options.jpg'
import ThresholdOptionsIcon from '../../assets/Threshold-Options.jpg'
import infoIcon from '../../assets/info.png'
import footerImg from '../../assets/footer.png'

// import image1 from '../../assets/images/WhatsAppImage1.jpeg'
// import image1_thumb from '../../assets/images/WhatsAppImage1_thumb.jpeg'
// import image2 from '../../assets/images/WhatsAppImage2.jpeg'
// import image2_thumb from '../../assets/images/WhatsAppImage2_thumb.jpeg'
// import image3 from '../../assets/images/WhatsAppImage3.jpeg'
// import image3_thumb from '../../assets/images/WhatsAppImage3_thumb.jpeg'
// import image4 from '../../assets/images/WhatsAppImage4.jpeg'
// import image4_thumb from '../../assets/images/WhatsAppImage4_thumb.jpeg'

// import image11 from '../../assets/images/WhatsAppImage11.jpeg'
// import image11_thumb from '../../assets/images/WhatsAppImage11_thumb.jpeg'
// import image12 from '../../assets/images/WhatsAppImage12.jpeg'
// import image12_thumb from '../../assets/images/WhatsAppImage12_thumb.jpeg'
// import image13 from '../../assets/images/WhatsAppImage13.jpeg'
// import image13_thumb from '../../assets/images/WhatsAppImage13_thumb.jpeg'
// import image14 from '../../assets/images/WhatsAppImage14.jpeg'
// import image14_thumb from '../../assets/images/WhatsAppImage14_thumb.jpeg'

import emailjs from 'emailjs-com'
import './quote-style.scss'

const HeroShapeBg = styled.div`
  background: url(${heroImg});
`

const thumbStyle = {
  height: '24px',
  width: '25px',
  margin: 'auto 10px',
  verticalAlign: 'middle'
}

const sendEmail = (e, go, values) => {
  e.preventDefault()
  if(values.yourName === '' || values.email === '' || values.telephone === '' || values.installation === ''){
    //alert('Please select all values!!!');
    return
  }
  console.log({ values })

  emailjs
  .send(
    'service_s3ahhv9',
    'template_133q9rs',
    values,
    'user_yPy5jMIHEXG58TD9bfr90'
  )
  .then(
    function (response) {
      //alert('Message successfully sent :)')
      console.log(response)
      go('step-6')
    },
    function (err) {
      //alert('Failure sending mail')
      console.log(err)
      go('step-7')
    }
  )
}

const steps = [
  { id: 'step-1', value: 1 },
  { id: 'step-2', value: 2 },
  { id: 'step-3', value: 3 },
  { id: 'step-4', value: 4 },
  { id: 'step-5', value: 5 },
  { id: 'step-6', value: 6 },
  { id: 'step-7', value: 7 }
]

const defaultData = {
  error: '',
  doorMaterial: 'Aluminium',
  width: '',
  height: '',
  panels: '',
  doorColour: '',
  handleColour: '',
  projectingCill: '225mm Projecting Cill',
  threshold: 'Low level',
  trickleVents: 'Yes',
  integralBlinds: 'None',
  foldingStyle: 'All folding left',
  openingStyle: 'Outwards',
  yourName: '',
  email: '',
  telephone: '',
  postcode: '',
  installation: 'No'
}

const options = {
  buttons: {
    backgroundColor: 'rgba(30,30,36,0.8)',
    iconColor: 'rgba(255, 255, 255, 0.8)',
    iconPadding: '10px',
    showAutoplayButton: false,
    showCloseButton: true,
    showDownloadButton: false,
    showFullscreenButton: false,
    showNextButton: false,
    showPrevButton: false,
    showThumbnailsButton: false,
    size: '40px'
  },
  thumbnails: {
    showThumbnails: false
  }
}

const StateDrop = ({ label, states, curvalue, icon, ...others }) => (
  <div className='label__wrapper'>
    <label className='select__label'>
      <img src={icon}></img>
      <span>{label}</span>
      {
        label === 'Projecting cill' &&
        <SimpleReactLightbox>
          <SRLWrapper options={options}>
            <a href={`${CillOptionsIcon}`}>
              <img src={`${infoIcon}`} alt="" style={thumbStyle} className="circle pulse" />
            </a>
          </SRLWrapper>
        </SimpleReactLightbox>
      }

      {
        label === 'Threshold' &&
        <SimpleReactLightbox>
          <SRLWrapper options={options}>
            <a href={`${ThresholdOptionsIcon}`}>
              <img src={`${infoIcon}`} alt="" style={thumbStyle} className="circle pulse" />
            </a>
          </SRLWrapper>
        </SimpleReactLightbox>
      }
    </label>
    <select {...others} style={{ borderBottom: others.value !== '' ? '2px solid #3ea744' : '2px solid #dc4545' }} required>
      {states.map(([value, name], i) => (
        <option key={i} value={value} selected>
          {name}
        </option>
      ))}
    </select>
  </div>
)

const ItemForm = ({ label, children, type = 'text', icon, ...otherProps }) => (
  <>
    {type === 'text' ? (
      <div className='label__group'>
        <label>
          <img src={icon}></img>
          <span>{label}</span>
        </label>
        <input type={type} {...otherProps} style={{ borderBottom: otherProps.value !== '' ? '2px solid #3ea744' : '2px solid #dc4545' }} required />
      </div>
    ) : (
        <div className='label__group'>
          <label>
            <img src={icon}></img>
            <span>{label}</span>
            </label>
            <input type={type} {...otherProps} style={{ borderBottom: otherProps.value !== '' ? '2px solid #3ea744' : '2px solid #dc4545' }} required />
        </div>
      )}
  </>
)

const Step1 = ({ setForm, formData, handleNext }) => {
  const { doorMaterial, width, height, panels } = formData
  let panelValue = []

  if (width === '') {
    formData.panels = ''
    panelValue = [
      ['', 'Please choose'],
      ['2 Panels', '2 Panels'],
      ['3 Panels', '3 Panels']
    ]
  }
  else if (width <= 1800) {
    formData.panels = '2 Panels'
    panelValue = [
      ['2 Panels', '2 Panels']
    ]
  } else if (width >= 1801 && width <= 2200) {
    panelValue = [
      ['', 'Please choose'],
      ['2 Panels', '2 Panels'],
      ['3 Panels', '3 Panels']
    ]
  } else if (width >= 2201 && width <= 3000) {
    formData.panels = '3 Panels'
    panelValue = [
      ['3 Panels', '3 Panels']
    ]
  } else if (width >= 3001 && width <= 4000) {
    formData.panels = '4 Panels'
    panelValue = [
      ['4 Panels', '4 Panels']
    ]
  } else if (width >= 4001 && width <= 5000) {
    formData.panels = '5 Panels'
    panelValue = [
      ['5 Panels', '5 Panels']
    ]
  } else if (width >= 5001) {
    formData.panels = '6 Panels'
    panelValue = [
      ['6 Panels', '6 Panels']
    ]
  }

  return (
    <div className='form'>
      <div className='heading__step'>
        <h2 >Step 1</h2>
        <p>Simply enter the size of the door you'd like below.</p>
      </div>

      <div className='step-content'>
        <div className='step__lables'>
          <StateDrop
            label='Door material'
            name='doorMaterial'
            icon={foldingIcon}
            value={doorMaterial}
            states={[
              //['', 'Please choose'],
              ['Aluminium', 'Aluminium'],
              //['Aluminium', 'Visofold 1000 Aluminium'],
              // ['Timber', 'Hardwood']
            ]}
            onChange={setForm}
          />
          <ItemForm
            label='Complete door width'
            name='width'
            placeholder='Ex. 3000 mm'
            value={width}
            icon={doorWidthIcon}
            onChange={setForm}
            type='number'
          />
          <ItemForm
            label='Door height'
            name='height'
            placeholder='Ex. 2000 mm'
            value={height}
            icon={doorHeightIcon}
            onChange={setForm}
            type='number'
          />
          <StateDrop
            label='And how many panels?'
            name='panels'
            value={panels}
            icon={doorPanelIcon}
            states={panelValue}
            onChange={setForm}
          />
        </div>
        <div className='step-btn'>
          <button onClick={handleNext}>Next</button>
        </div>
      </div>
      {/* <div className='notice__wrapper'>
        <strong>Please note</strong>
        <p>Aluminium minimum door width = 1650 mm *</p>
        <p>Aluminium maximum door width = 7200 mm *</p>
        <p>
          * Wider doors are possible - details and prices are
          available on request
        </p>
      </div> */}
    </div>
  )
}

const Step2 = ({ setForm, formData, handleNext, handlePrev }) => {
  const { doorColour, handleColour } = formData

  return (
    <div className='form'>
      <div className='heading__step'>
        <h2 >Step 2</h2>
        <p>Please select the colour(s) of your door below.</p>
      </div>
      <div className='step-content'>
        <div className='step__lables'>
          <StateDrop
            label='Door colour'
            name='doorColour'
            value={doorColour}
            icon={doorColorIcon}
            states={[
              ['', 'Please Choose'],
              ['White', 'White'],
              ['Anthracite Grey', 'Anthracite Grey'],
              ['Black', 'Black'],
              ['Anthracite Grey External/White Internal', 'Anthracite Grey External/White Internal'],
            ]}
            onChange={setForm}
          />
          <StateDrop
            label='Handle colour'
            name='handleColour'
            value={handleColour}
            icon={doorHandleIcon}
            states={[
              ['', 'Please Choose'],
              ['Black', 'Black'],
              ['Silver', 'Silver'],
              ['Polished Chrome', 'Polished Chrome'],
              ['Anthracite Grey', 'Anthracite Grey']
            ]}
            onChange={setForm}
          />
        </div>
        <div className='step-btn'>
          <button onClick={handlePrev}>Previous</button>
          <button onClick={handleNext}>Next</button>
        </div>
      </div>
    </div>
  )
}

const Step3 = ({ setForm, formData, handleNext, handlePrev }) => {
  const { projectingCill, threshold, trickleVents, integralBlinds, foldingStyle, openingStyle, panels } = formData

  const twoPanelsArr = [
    ['All folding left', 'All folding left'],
    ['All folding right', 'All folding right']
  ]
  
  const threePanelsArr = [
    ['All folding left', 'All folding left'],
    ['All folding right', 'All folding right'],
    ['1x left & 2x right', '1 X Left & 2 X Right'],
    ['2x left & 1x right', '2 X Left & 1 X Right']
  ]

  const fourPanelsArr = [
    ['All folding left', 'All folding left'],
    ['All folding right', 'All folding right'],
    ['1x left & 3x right', '1 X Left & 3 X Right'],
    ['2x left & 2x right', '2 X Left & 2 X Right'],
    ['3x left & 1x right', '3 X Left & 1 X Right'],
  ]
  
  const fivePanelsArr = [
    ['All folding left', 'All folding left'],
    ['All folding right', 'All folding right'],
    ['1x left & 4x right', '1 X Left & 4 X Right'],
    ['2x left & 3x right', '2 X Left & 3 X Right'],
    ['3x left & 2x right', '3 X Left & 2 X Right'],
    ['4x left & 1x right', '4 X Left & 1 X Right'],
  ]

  const sixPanelsArr = [
    ['All folding left', 'All folding left'],
    ['All folding right', 'All folding right'],
    ['1x left & 5x right', '1 X Left & 5 X Right'],
    ['2x left & 4x right', '2 X Left & 4 X Right'],
    ['3x left & 3x right', '3 X Left & 3 X Right'],
    ['4x left & 2x right', '4 X Left & 2 X Right'],
    ['5x left & 1x right', '5 X Left & 1 X Right'],
  ]

  let panelValue = twoPanelsArr
  
  if (panels === '2 Panels') {
    panelValue = twoPanelsArr
  } else if (panels === '3 Panels') {
    panelValue = threePanelsArr
  } else if (panels === '4 Panels') {
    panelValue = fourPanelsArr
  } else if (panels === '5 Panels') {
    panelValue = fivePanelsArr
  } else if (panels === '6 Panels') {
    panelValue = sixPanelsArr
  }

  return (
    <div className='form'>
      <div className='heading__step'>
        <h2 >Step 3</h2>
        <p>Please customise your bifolder.</p>
      </div>
      <div className='step-content'>
        <div className='step__lables'>
          <StateDrop
            label='Projecting cill'
            name='projectingCill'
            value={projectingCill}
            icon={cillIcon}
            states={[
              ['85mm Projecting Cill', '85mm Projecting Cill'],
              ['150mm Projecting Cill', '150mm Projecting Cill'],
              ['190mm Projecting Cill', '190mm Projecting Cill'],
              ['225mm Projecting Cill', '225mm Projecting Cill'],
              ['None', 'None']
            ]}
            onChange={setForm}
          />
          <StateDrop
            label='Threshold'
            name='threshold'
            value={threshold}
            icon={cillIcon}
            states={[
              ['Low level', 'Low level'],
              ['Standard level', 'Standard level']
            ]}
            onChange={setForm}
          />{' '}
          <StateDrop
            label='Trickle vents'
            name='trickleVents'
            value={trickleVents}
            icon={ventsIcon}
            states={[
              ['Yes', 'Yes'],
              ['No', 'No']
            ]}
            onChange={setForm}
          />
          <StateDrop
            label='Integral blinds'
            name='integralBlinds'
            value={integralBlinds}
            icon={blindsIcon}
            states={[
              ['None', 'None'],
              ['Silver', 'Silver'],
              ['Light Grey', 'Light Grey'],
              ['Anthracite Grey', 'Anthracite Grey'],
              ['White', 'White'],
              ['Beige', 'Beige'],
              ['Yellow', 'Yellow'],
              ['Green', 'Green'],
              ['Light Blue', 'Light Blue'],
              ['Metallic Silver', 'Metallic Silvere'],
              ['Cream', 'Cream']
            ]}
            onChange={setForm}
          />{' '}
          <StateDrop
            label='Folding style'
            name='foldingStyle'
            value={foldingStyle}
            icon={foldingstyleIcon}
            states={panelValue}
            onChange={setForm}
          />
          <StateDrop
            label='Opening Style'
            name='openingStyle'
            value={openingStyle}
            icon={openingstyleIcon}
            states={[
              ['Outwards', 'Doors Opening Outwards'],
              ['Inwards', 'Doors Opening Inwards']
            ]}
            onChange={setForm}
          />
        </div>
        <div className='step-btn'>
          <button onClick={handlePrev}>Previous</button>
          <button onClick={handleNext}>Next</button>
        </div>
      </div>
    </div>
  )
}

const Step4 = ({ setForm, formData, handleNext, handlePrev }) => {
  const { foldingStyle, doorColour, panels } = formData

  const twoPanelsArr = [
    ['All folding left', 'All folding left'],
    ['All folding right', 'All folding right']
  ]
  
  const threePanelsArr = [
    ['All folding left', 'All folding left'],
    ['All folding right', 'All folding right'],
    ['1x left & 2x right', '1 X Left & 2 X Right'],
    ['2x left & 1x right', '2 X Left & 1 X Right']
  ]

  const fourPanelsArr = [
    ['All folding left', 'All folding left'],
    ['All folding right', 'All folding right'],
    ['1x left & 3x right', '1 X Left & 3 X Right'],
    ['2x left & 2x right', '2 X Left & 2 X Right'],
    ['3x left & 1x right', '3 X Left & 1 X Right'],
  ]
  
  const fivePanelsArr = [
    ['All folding left', 'All folding left'],
    ['All folding right', 'All folding right'],
    ['1x left & 4x right', '1 X Left & 4 X Right'],
    ['2x left & 3x right', '2 X Left & 3 X Right'],
    ['3x left & 2x right', '3 X Left & 2 X Right'],
    ['4x left & 1x right', '4 X Left & 1 X Right'],
  ]

  const sixPanelsArr = [
    ['All folding left', 'All folding left'],
    ['All folding right', 'All folding right'],
    ['1x left & 5x right', '1 X Left & 5 X Right'],
    ['2x left & 4x right', '2 X Left & 4 X Right'],
    ['3x left & 3x right', '3 X Left & 3 X Right'],
    ['4x left & 2x right', '4 X Left & 2 X Right'],
    ['5x left & 1x right', '5 X Left & 1 X Right'],
  ]

  let panelValue = twoPanelsArr
  
  if (panels === '2 Panels') {
    panelValue = twoPanelsArr
  } else if (panels === '3 Panels') {
    panelValue = threePanelsArr
  } else if (panels === '4 Panels') {
    panelValue = fourPanelsArr
  } else if (panels === '5 Panels') {
    panelValue = fivePanelsArr
  } else if (panels === '6 Panels') {
    panelValue = sixPanelsArr
  }

  function getVideo() {
    if(doorColour === 'White') {
      if(foldingStyle === 'All folding left') {
        if(panels === '2 Panels'){
          return twoPanlesWhiteLeft
        } else if (panels === '3 Panels') {
          return threeWhitePanelsLeft
        } else if (panels === '4 Panels') {
          return fourWhitePanelsLeft
        } else if (panels === '5 Panels') {
          return fiveWhitePanelsLeft
        } else if (panels === '6 Panels') {
          return sixWhitePanelsLeft
        }
      }
      else if(foldingStyle === 'All folding right') {
        if(panels === '2 Panels'){
          return twoPanlesWhiteRight
        } else if (panels === '3 Panels') {
          return threeWhitePanelsRight
        } else if (panels === '4 Panels') {
          return fourWhitePanelsRight
        } else if (panels === '5 Panels') {
          return fiveWhitePanelsRight
        } else if (panels === '6 Panels') {
          return sixWhitePanelsRight
        }
      }
      //three panels
      else if(foldingStyle === '1x left & 2x right') {
        return threePanelsWhite1Left2Right
      }
      else if(foldingStyle === '2x left & 1x right') {
        return threePanelsWhite2Left1Right
      }
      //four panles
      else if(foldingStyle === '1x left & 3x right') {
        return fourPanelsWhite1Left3Right
      }
      else if(foldingStyle === '2x left & 2x right') {
        return fourPanelsWhite2Left2Right
      }
      else if(foldingStyle === '3x left & 1x right') {
        return fourPanelsWhite3Left1Right
      }
      //five panles
      else if(foldingStyle === '1x left & 4x right') {
        return fivePanelsWhite1Left4Right
      }
      else if(foldingStyle === '2x left & 3x right') {
        return fivePanelsWhite2Left3Right
      }
      else if(foldingStyle === '3x left & 2x right') {
        return fivePanelsWhite3Left2Right
      }
      else if(foldingStyle === '4x left & 1x right') {
        return fivePanelsWhite4Left1Right
      }
      //six panles
      else if(foldingStyle === '1x left & 5x right') {
        return sixPanelsWhite1Left5Right
      }
      else if(foldingStyle === '2x left & 4x right') {
        return sixPanelsWhite2Left4Right
      }
      else if(foldingStyle === '3x left & 3x right') {
        return sixPanelsWhite3Left3Right
      }
      else if(foldingStyle === '4x left & 2x right') {
        return sixPanelsWhite4Left2Right
      }
      else if(foldingStyle === '5x left & 1x right') {
        return sixPanelsWhite5Left1Right
      }
    }
    else {
      if(foldingStyle === 'All folding left') {
        if(panels === '2 Panels'){
          return twoPanlesGrayLeft
        } else if (panels === '3 Panels') {
          return threeGrayPanelsLeft
        } else if (panels === '4 Panels') {
          return fourGrayPanelsLeft
        } else if (panels === '5 Panels') {
          return fiveGrayPanelsLeft
        } else if (panels === '6 Panels') {
          return sixGrayPanelsLeft
        }
      }
      else if(foldingStyle === 'All folding right') {
        if(panels === '2 Panels'){
          return twoPanlesGrayRight
        } else if (panels === '3 Panels') {
          return threeGrayPanelsRight
        } else if (panels === '4 Panels') {
          return fourGrayPanelsRight
        } else if (panels === '5 Panels') {
          return fiveGrayPanelsRight
        } else if (panels === '6 Panels') {
          return sixGrayPanelsRight
        }
      }
      //three panels
      else if(foldingStyle === '1x left & 2x right') {
        return threePanelsGrey1Left2Right
      }
      else if(foldingStyle === '2x left & 1x right') {
        return threePanelsGrey2Left1Right
      }
      //four panels
      else if(foldingStyle === '1x left & 3x right') {
        return fourPanelsGrey1Left3Right
      }
      else if(foldingStyle === '2x left & 2x right') {
        return fourPanelsGrey2Left2Right
      }
      else if(foldingStyle === '3x left & 1x right') {
        return fourPanelsGrey3Left1Right
      }
      //five panles
      else if(foldingStyle === '1x left & 4x right') {
        return fivePanelsGrey1Left4Right
      }
      else if(foldingStyle === '2x left & 3x right') {
        return fivePanelsGrey2Left3Right
      }
      else if(foldingStyle === '3x left & 2x right') {
        return fivePanelsGrey3Left2Right
      }
      else if(foldingStyle === '4x left & 1x right') {
        return fivePanelsGrey4Left1Right
      }
      //six panles
      else if(foldingStyle === '1x left & 5x right') {
        return sixPanelsGrey1Left5Right
      }
      else if(foldingStyle === '2x left & 4x right') {
        return sixPanelsGrey2Left4Right
      }
      else if(foldingStyle === '3x left & 3x right') {
        return sixPanelsGrey3Left3Right
      }
      else if(foldingStyle === '4x left & 2x right') {
        return sixPanelsGrey4Left2Right
      }
      else if(foldingStyle === '5x left & 1x right') {
        return sixPanelsGrey5Left1Right
      }
    }
  }
  
  return (
    <div className='form'>
      <div className='heading__step'>
        <h2>See your configuration</h2>
      </div>
      <div className='step-content'>
        <div className='video-content'>
          <StateDrop
            label='Change style (viewed from outside)'
            name='foldingStyle'
            value={foldingStyle}
            icon={foldingstyleIcon}
            states={panelValue}
            onChange={setForm}
          />
          {
            <div className='vide-left'>
              <video key={getVideo()} width='450' autoPlay muted loop>
                <source src={getVideo()} />
              </video>
            </div>
          }
        </div>
        <div className='step-btn'>
          <button onClick={handlePrev}>Previous</button>
          <button onClick={handleNext}>Next</button>
        </div>
      </div>
    </div>
  )
}

const Step5 = ({ setForm, formData, navigation }) => {
  const { yourName, email, telephone, postcode, installation } = formData
  const { go } = navigation

  return (
    <div className='form'>
      <div className='heading__step'>
        <h2>Get your instant quote</h2>
        <p>Please fill in your details below so that we can send your instant quote.</p>
      </div>
      <div className='step-content'>

        <div className='top-inpt'>
          <div className='inputl-left'>
            <ItemForm
              // label='Name'
              name='yourName'
              placeholder='Full Name'
              value={yourName}
              onChange={setForm}
            />
            <ItemForm
              // label='Telephone'
              name='telephone'
              placeholder='Telephone'
              value={telephone}
              onChange={setForm}
            />
          </div>
          <div className='input-right'>
            <ItemForm
              // label='Email'
              name='email'
              placeholder='Email'
              value={email}
              type='email'
              onChange={setForm}
            />
            <ItemForm
              // label='Post Code'
              name='postcode'
              placeholder='Post Code'
              value={postcode}
              onChange={setForm}
            />
          </div>
        </div>

        <StateDrop
          label='Add installation'
          name='installation'
          value={installation}
          icon={instalationIcon}
          states={[
            ['No', 'No'],
            ['Yes', 'Yes']
          ]}
          onChange={setForm}
        />
        <div className='step-btn'>
          <button onClick={e => sendEmail(e, go, formData)}>Submit</button>
        </div>
      </div>
    </div>
  )
}

const Step6 = ({ setForm, formData }) => {
  return (
    <div className='form'>
      <div className='succefull-email'>
        <div className='cheked-icon'>
          <svg version="1.1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 130.2 130.2">
            <circle class="path circle" fill="none" stroke="#73AF55" stroke-width="6" stroke-miterlimit="10" cx="65.1" cy="65.1" r="62.1" />
            <polyline class="path check" fill="none" stroke="#73AF55" stroke-width="6" stroke-linecap="round" stroke-miterlimit="10" points="100.2,40.2 51.5,88.8 29.8,67.5 " />
          </svg>
        </div>
        <h3>We received your details</h3>
        <p>Our team will contact you shortly!</p>
        <div className='home-btn'>
          <Link to='/'><button>Main Page</button></Link>
        </div>
      </div>
    </div>
  )
}

const Step7 = () => {
  return (
    <div className='form'>
      <div className='error-email'>
        <div className='cheked-icon'>
          <svg version="1.1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 130.2 130.2">
            <circle class="path circle" fill="none" stroke="#73AF55" stroke-width="6" stroke-miterlimit="10" cx="65.1" cy="65.1" r="62.1" />
            <polyline class="path check" fill="none" stroke="#73AF55" stroke-width="6" stroke-linecap="round" stroke-miterlimit="10" points="100.2,40.2 51.5,88.8 29.8,67.5 " />
          </svg>
        </div>
        <h3>Opps Somethink went wrong</h3>
        <p>Try again</p>
        <div className='home-btn'>
          <Link to='/quote'><button>Try again</button></Link>
        </div>
      </div>
    </div>
  )
}

const MultiStepForm = ({ id, props }) => {
  console.log(props);
  switch (id) {
    case 'step-1':
      return <Step1 {...props} />
    case 'step-2':
      return <Step2 {...props} />
    case 'step-3':
      return <Step3 {...props} />
    case 'step-4':
      return <Step4 {...props} />
    case 'step-5':
      return <Step5 {...props} />
    case 'step-6':
      return <Step6 {...props} />
    case 'step-7':
      return <Step7 {...props} />
    default:
      return null
  }
}

export default function Quote() {
  const [formData, setForm] = useForm(defaultData)
  const { step, navigation } = useStep({ initialStep: 0, steps })
  const { id, value } = step

  const { 
    error,
    doorMaterial,
    width,
    height,
    panels,
    doorColour,
    handleColour,
    projectingCill,
    threshold,
    trickleVents,
    integralBlinds,
    foldingStyle,
    openingStyle } = formData

  function handleNext() {
    console.log(id);
    console.log(formData);
    if(id === 'step-1') {
      if(doorMaterial !== '' && width !== '' && height !== '' && panels !== ''){
        formData.error = ''
        navigation.next()
      }else{
        formData.error = 'Please select all values!!!'
      }
    }
    else if(id === 'step-2') {
      if(doorColour !== '' && handleColour !== ''){
        formData.error = ''
        navigation.next()
      }else{
        formData.error = 'Please select all values!!!'
      }
    }
    else if(id === 'step-3') {
      if(projectingCill !== '' && threshold !== '' && trickleVents !== '' && integralBlinds !== '' && foldingStyle !== '' && openingStyle !== ''){
        formData.error = ''
        navigation.next()
      }else{
        formData.error = 'Please select all values!!!'
      }
    }
    else if(id === 'step-4') {
      if(foldingStyle !== ''){
        formData.error = ''
        navigation.next()
      }else{
        formData.error = 'Please select all values!!!'
      }
    }
  }

  function handlePrev() {
    formData.error = ''
    navigation.previous()
  }

  const props = { formData, setForm, navigation, handleNext, handlePrev }

  return (
    <div className='mainPage'>
      <HeroShapeBg className='HeroShapeBg'/>
      <section className='bifold-wrapper'>
        <NavMenu />
        <main className='buifold-content__pages'>
          <div className='pages-title'>
            <h1></h1>
          </div>
          <div className='pages-wrapper'>
            <div className='quote__page'>
              <div className='step__track'>
                <i
                  className={`step-icon ${value >= 1 && 'active'}`}
                  id='icon-step-1'
                ></i>
                <i className='step-line'></i>
                <i
                  className={`step-icon ${value >= 2 && 'active'}`}
                  id='icon-step-2'
                ></i>
                <i className='step-line'></i>
                <i
                  className={`step-icon ${value >= 3 && 'active'}`}
                  id='icon-step-3'
                ></i>
                <i className='step-line'></i>
                <i
                  className={`step-icon ${value >= 4 && 'active'}`}
                  id='icon-step-4'
                ></i>

              </div>
              <MultiStepForm id={id} props={props} />
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
