import * as React from 'react';
import Box from '@mui/material/Box';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import { Stack } from 'react-bootstrap';
import { addResumeAPI } from '../services/allAPI';
import swal from 'sweetalert';


function Steps({userInput,setUserInput,setFinish, setResumeId}) {
  const steps = ['Basic Information', 'Contact Details', 'Educational Details','Work Experience','Skill & Certification', 'Review & Submit'];
  // console.log(userInput)
  const suggestionSkills=['REACT', 'ANGULAR', 'NODE', 'EXPRESS', 'MONGODB', 'JAVASCRIPT', 'GIT', 'UI/UX'];

  const [activeStep, setActiveStep] = React.useState(0);
  const [skipped, setSkipped] = React.useState(new Set());
  const userSkillRef= React.useRef()
    const [errors, setErrors] = React.useState({});

  
  const isStepOptional = (step) => {
    return step === 1;
  };

  const isStepSkipped = (step) => {
    return skipped.has(step);
  };

  const handleNext = () => {
    if(validateStep(activeStep)){ ///form validation step///
    let newSkipped = skipped;
    if (isStepSkipped(activeStep)) {
      newSkipped = new Set(newSkipped.values());
      newSkipped.delete(activeStep);
    }

    setActiveStep((prevActiveStep) => prevActiveStep + 1);
    setSkipped(newSkipped);
  }

  };
    const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleSkip = () => {
    if (!isStepOptional(activeStep)) {
      // You probably want to guard against something like this,
      // it should never occur unless someone's actively trying to break something.
      throw new Error("You can't skip a step that isn't optional.");
    }

    setActiveStep((prevActiveStep) => prevActiveStep + 1);
    setSkipped((prevSkipped) => {
      const newSkipped = new Set(prevSkipped.values());
      newSkipped.add(activeStep);
      return newSkipped;
    });
  };
    const handleReset = () => {
    setActiveStep(0);
  };

// add skill
const addSkill=(inputSkill)=>{
  if(inputSkill){
    if(userInput.skills.includes(inputSkill)){
      alert("Skill already exist...add another")
    }
    else{
      setUserInput({...userInput, skills:[...userInput.skills,inputSkill]})
    }
  }
}


// remove skill
const removeSkill = (skill) =>{
    setUserInput({...userInput,skills:userInput.skills.filter(item=>item!=skill)})
  }


  const renderStepContent = (step) =>{

    switch(step) {
      case 0:
          
      return (
        <div>
          <h3>Personal Details</h3>
          <div className="d-flex row p-3">
          <TextField id="standard-basic" label="Full Name" variant="standard"
          onChange={e=>setUserInput({...userInput,personalDetails: {...userInput.personalDetails,name:e.target.value}})}  value={userInput.personalDetails.name}
          error={!!errors.name} helperText={errors.name}/>
          <TextField id="standard-basic" label="Job Title" variant="standard"
          onChange={e=>setUserInput({...userInput,personalDetails: {...userInput.personalDetails,jobTitle:e.target.value}})} value={userInput.personalDetails.jobTitle}
          error={!!errors.jobTitle} helperText={errors.jobTitle}/>
          <TextField id="standard-basic" label="Location" variant="standard"
          onChange={e=>setUserInput({...userInput,personalDetails: {...userInput.personalDetails,location:e.target.value}})} value={userInput.personalDetails.location}
          error={!!errors.location} helperText={errors.location}/>
          
          </div>
        </div>

      )
      case 1: return (
        <div>
          <h3>Contact Details</h3>
          <div className="d-flex row p-3">
          <TextField id="standard-basic" label="Email" variant="standard" onChange={e=>setUserInput({...userInput,personalDetails: {...userInput.personalDetails,email:e.target.value}})} value={userInput.personalDetails.email} 
             error={!!errors.email} helperText={errors.email}/>

          <TextField id="standard-basic" label="Phone Number" variant="standard" onChange={e=>setUserInput({...userInput,personalDetails: {...userInput.personalDetails,phone:e.target.value}})} value={userInput.personalDetails.phone}
           error={!!errors.phone} helperText={errors.phone}/>

          <TextField id="standard-basic" label="GitHub Profile Link" variant="standard" onChange={e=>setUserInput({...userInput,personalDetails: {...userInput.personalDetails,github:e.target.value}})} value={userInput.personalDetails.github}/>

          <TextField id="standard-basic" label="linkedIn Profile Link" variant="standard" onChange={e=>setUserInput({...userInput,personalDetails: {...userInput.personalDetails,linkedin:e.target.value}})} value={userInput.personalDetails.linkedin}/>

          <TextField id="standard-basic" label="Portfolio  Link" variant="standard" onChange={e=>setUserInput({...userInput,personalDetails: {...userInput.personalDetails,portfolio:e.target.value}})}  value={userInput.personalDetails.portfolio}/>
          </div>
        </div>
            
      )
      case 2: return (
        <div>
          <h3>Education Details</h3>
          <div className="d-flex row p-3">
          <TextField id="standard-basic" label="Course Name" variant="standard" onChange={e=>setUserInput({...userInput,education: {...userInput.education,course:e.target.value}})} value={userInput.education.course}
             error={!!errors.course} helperText={errors.course}/>

          <TextField id="standard-basic" label="College name" variant="standard"  onChange={e=>setUserInput({...userInput,education: {...userInput.education,college:e.target.value}})} value={userInput.education.college}
             error={!!errors.college} helperText={errors.college}/>

          <TextField id="standard-basic" label="University" variant="standard" onChange={e=>setUserInput({...userInput,education: {...userInput.education,university:e.target.value}})}  value={userInput.education.university}
             error={!!errors.university} helperText={errors.university}/>

          <TextField id="standard-basic" label="Year of Passout" variant="standard"  onChange={e=>setUserInput({...userInput,education: {...userInput.education,year:e.target.value}})} value={userInput.education.year}
             error={!!errors.year} helperText={errors.year}/>
          </div>
        </div>
            

      )
      case 3: return (
        <div>
          <h3>Professional Details</h3>
          <div className="d-flex row p-3">
          <TextField id="standard-basic" label="Job or Internship" variant="standard"  onChange={e=>setUserInput({...userInput,experience: {...userInput.experience,job:e.target.value}})} value={userInput.experience.job}
             error={!!errors.job} helperText={errors.job}/>

          <TextField id="standard-basic" label="Company name" variant="standard"  onChange={e=>setUserInput({...userInput,experience: {...userInput.experience,company:e.target.value}})} value={userInput.experience.company}
             error={!!errors.company} helperText={errors.company}/>

          <TextField id="standard-basic" label="Location" variant="standard"  onChange={e=>setUserInput({...userInput,experience: {...userInput.experience,companylocation:e.target.value}})} value={userInput.experience.companylocation}
             error={!!errors.companylocation} helperText={errors.companylocation}/>

          <TextField id="standard-basic" label="Duration" variant="standard"  onChange={e=>setUserInput({...userInput,experience: {...userInput.experience,duration:e.target.value}})} value={userInput.experience.duration}
             error={!!errors.duration} helperText={errors.duration}/>
          </div>
        </div>

      )
      case 4: return (
        <div>
          <h3>Skills</h3>
          <Box sx={{width:'100%'}}>
            <Stack spacing={2}>
            {/* <TextField id="standard-basic" label="Add Skill" variant="standard" /> */}

            <input ref={userSkillRef} type="text"  className='form-control' placeholder='Add Skill'/>
          <Button onClick={()=>addSkill(userSkillRef.current.value)} className='me-3'  variant="text" sx={{maxWidth:'40px'}}>Add</Button>
            </Stack>
            <div>
              <h5>Suggestions: </h5>
              <div className="d-flex flex-wrap justify-content-between">
                {
                  suggestionSkills.map(userSkill=>(
                    <Button onClick={()=>addSkill(userSkill)} variant="outlined">{userSkill}</Button>
                  ))
                }
              </div>
            </div>
            <div>
              <h5>Added Skills: </h5>

              <div className="d-flex justify-content-between">
               {
                userInput.skills.length>0?userInput.skills.map(skill=>(
               <span style={{height:'35px'}}  className='btn btn-primary d-flex align-item-center justify content center '>{skill}
                  <button onClick={()=>removeSkill(skill)} style={{marginTop:'-7px'}} className='btn text-light' >X</button>
                </span>
                )):<p>Nothing to display</p>
                }
              </div>
            </div>

          </Box>
        </div>
      )
      case 5: return (
        <div>
          <h3>Professional Summary</h3>
          <div className="d-flex row p-3">
           <TextField 
           id="standard-multiline-static" 
           label="Write a short summary of yourself" 
           multiline 
           rows={4} 
           defaultValue="Eg: I'm a passionate full-stack developer with hands-on experience in React,Node ..." 
            variant="standard"
            onChange={e=>setUserInput({...userInput,summary:e.target.value})}   value={userInput.summary} 
             error={!!errors.summary} helperText={errors.summary}/>
          </div>
        </div>
      )
      default: return Null
    }
  }

// form validation
const validateStep=(step)=>{
  const newErrors ={};

  switch (step){
    case 0: //personal details
      const {name,jobTitle,location}=userInput.personalDetails;
      if(!name) newErrors.name="Full name is required";
      if(!jobTitle) newErrors.jobTitle="Job title is required";
      if(!location) newErrors.location="Location is required";
      break;
    case 1: //contact details
      const { email, phone } = userInput.personalDetails;
      if (!email) newErrors.email = "Email is required";
      else if (!/\S+@\S+\.\S+/.test(email)) newErrors.email = "Invalid email format";

      if (!phone) newErrors.phone = "Phone number is required";
      else if (!/^[0-9]{10}$/.test(phone)) newErrors.phone = "Phone number must be 10 digits";
      break;
    case 2: //education
      const { course, college, university, year } = userInput.education;
      if (!course) newErrors.course = "Course name is required";
      if (!college) newErrors.college = "College name is required";
      if (!university) newErrors.university = "University name is required";
      if (!year) newErrors.year = "Year of passout is required";
      break;
    case 3: //work experience
      const { job, company, companylocation, duration } = userInput.experience;
      if (!job) newErrors.job = "Job/Internship title is required";
      if (!company) newErrors.company = "Company name is required";
      if (!companylocation) newErrors.companylocation = "Location is required";
      if (!duration) newErrors.duration = "Duration is required";
      break;
    case 5: //summary
      if (!userInput.summary) newErrors.summary = "Summary is required";
      break;
    default:
      break;
  }
  setErrors(newErrors);
  return Object.keys(newErrors).length ===0; //return true if no errors
};

// handleAddResume

const handleAddResume=async()=>{
  // alert("api called")
const {name,jobTitle,location}=userInput.personalDetails

if(name && jobTitle && location){
  // alert("api call")
  try{
      const result = await addResumeAPI(userInput)
      console.log(result);
      swal("Success", "Resume Added", "success");
      setFinish(true)
      setResumeId(result.data.id)
  }
  catch(err){
    console.log(err);
    swal("Error", "Resume Added", "error");
  }
}
else{
  alert("Please fill missing fields")
}
}

  return (
    <div>
     <Box sx={{ width: '100%' }}>
      <Stepper activeStep={activeStep}>
        {steps.map((label, index) => {
          const stepProps = {};
          const labelProps = {};
          if (isStepOptional(index)) {
            labelProps.optional = (
              <Typography variant="caption">Optional</Typography>
            );
          }
          if (isStepSkipped(index)) {
            stepProps.completed = false;
          }
          return (
            <Step key={label} {...stepProps}>
              <StepLabel {...labelProps}>{label}</StepLabel>
            </Step>
          );
        })}
      </Stepper>
      {activeStep === steps.length ? (
        <React.Fragment>
          <Typography sx={{ mt: 2, mb: 1 }}>
            All steps completed - you&apos;re finished
          </Typography>
          <Box sx={{ display: 'flex', flexDirection: 'row', pt: 2 }}>
            <Box sx={{ flex: '1 1 auto' }} />
            <Button onClick={handleReset}>Reset</Button>
          </Box>
        </React.Fragment>
      ) : (
        <React.Fragment>
          <Typography sx={{ mt: 2, mb: 1 }}>Step {activeStep + 1}</Typography>
          <Box>
            {renderStepContent(activeStep)}
          </Box>

          <Box sx={{ display: 'flex', flexDirection: 'row', pt: 2 }}>
            <Button
              color="inherit"
              disabled={activeStep === 0}
              onClick={handleBack}
              sx={{ mr: 1 }}
            >
              Back
            </Button>
            <Box sx={{ flex: '1 1 auto' }} />
            {isStepOptional(activeStep) && (
              <Button color="inherit" onClick={handleSkip} sx={{ mr: 1 }}>
                Skip
              </Button>
            )}
            {
                activeStep === steps.length - 1
                ? <Button onClick={handleAddResume}>Finish</Button>:<Button onClick={handleNext}>Next</Button>
            }
          </Box>
        </React.Fragment>
      )}
    </Box>
    </div>
  )
}

export default Steps

