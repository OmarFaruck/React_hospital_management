import React from 'react';
import Accordion from 'react-bootstrap/Accordion';

function BasicExample() {
    return (
      <Accordion defaultActiveKey="0">
        <Accordion.Item eventKey="0">
          <Accordion.Header>Why Ganesh Diagnostic is best for MRI Scan Test in Delhi?</Accordion.Header>
          <Accordion.Body>
            <p>Ganesh Diagnostic is a NABL and NABH accredited, one of the few diagnostic centers which are famous for bringing the latest technique of MRI 3.0 Tesla for precise results in Delhi. We are a front-runner in the field of MRI (Magnetic resonance imaging) and provide 24×7 and 365 days MRI services using state-of-the-art techniques, highlighting the advanced technology.</p>
            <p>Functional MRI, MRI Angiography, MRI with contrast, and MRI without contrast to examine the different parts of the body such as the knee, abdomen, leg, head, thyroid gland, spine, neck, face, shoulder, kidney, pelvis, etc, you can count on us.</p>
            <p>Apart from the quality diagnostic services, we provide a free ambulance service for pick and drop facility. Our center is wheelchair accessible and to provide you with wheelchair accessibility, we have a team of courteous and helpful staff, who are always on hand to fulfill the patient's needs.</p>
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="1">
          <Accordion.Header>What is the price of the MRI test at MRI Scan Centers?</Accordion.Header>
          <Accordion.Body>
          <p>Nowadays, an MRI scan is one of the most preferred techniques for the effective diagnosis of the problem.  In Delhi, various MRI scan centers are offering 1.5 Tesla and 3.0 Tesla  MRI Scan service and their price for an MRI test facility vary.</p>
          <p>The price of an MRI test is between 3000 INR to 19000 INR, depending on location, the technology used (1.5 Tesla MRI or 3.0 Tesla MRI), the reputation of the MRI scan center, the type of scan (MRI angiography, MRI plain, MRI Contrast) and for which body part you need to undergo MRI scan.</p>
          <p>But at Ganesh Diagnostic and Imaging Centre, the price of an MRI Scan starts at 3000 INR.</p>
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="2">
          <Accordion.Header>How Long Does it take to get the MRI Scan Reports?</Accordion.Header>
          <Accordion.Body>
           <p>It takes 24 hours to get the MRI scan reports. On the completion of the procedure, the radiologist will check the images produced during the scan and write the analysis to prepare the report. With the help of written analysis by a radiologist, your doctor will interpret the imaging study to diagnose the problem you are suffering from to provide you the customized treatment according to your problem.</p>
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="3">
          <Accordion.Header>How long will the Exam Take?</Accordion.Header>
          <Accordion.Body>
           <p>The time duration of the MRI exam will depend on the body part to be scanned and the number of images required by the doctor to interpret the result and diagnose the problem. Generally, it takes only 15 mins. to 60 mins to produce the images of the specific portion to identify the problem.</p>
           <p>But if the doctor requires more pictures for a detailed analysis of the problem, then it may take more time. In this case, the contrast media given to the patient in the vein of the arm before the scanning procedure takes approximately 90 mins to complete the procedure</p>
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="4">
          <Accordion.Header>What precautions should a patient take before an MRI scan?</Accordion.Header>
          <Accordion.Body>
           <p>Because MRI scan uses a strong magnetic field.  So, for safety purposes, you should take some precautions before undergoing MRI Scan such as:</p>
           <h5>* Remove all kinds of metallic objects like hearing aids, watches,  jewelry, dentures, wigs, piercings, hair pins, etc</h5>.
           <h5>* Depending on the body part to be scanned, you need to wear a hospital gown</h5>.
           <h5>*In the case of MRI with contrast- If you have kidney disease, then get your KFT test done to determine the functioning of the kidney.</h5>.
           <h5>*Inform the doctor, if you are suffering from any kind of allergy reaction or blood clotting problem..</h5>.
           <h5>*IInform the doctor, if you are claustrophobic</h5>.
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="5">
          <Accordion.Header>Is a Doctor's Prescription Mandatory for an MRI test?</Accordion.Header>
          <Accordion.Body>
           <p>Yes, a doctor's prescription is mandatory for an MRI test. The doctor recommends an MRI scan if he/ she needs further information for precise detection of the problems such as tumors and abnormalities in the different body parts such as the brain, joints, muscles, spinal cord, internal organs, etc.</p>
           <p>He/she knows well which type of MRI the patient needs as per the condition.  So, a doctor's prescription is required to confirm the type of MRI the patient is recommended for.</p>
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="6">
          <Accordion.Header>What are the side effects of an MRI? </Accordion.Header>
          <Accordion.Body>
           <p>MRI scan doesn’t use x-ray radiation. So, it has no known side effects. But in the case of contrast media, some patients may experience reactions to contrast dye. For the MRI scan, patients need to lie in a closed area so some patients may experience claustrophobia..</p> 
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="7">
          <Accordion.Header>Who performs MRI at MRI scan centers? </Accordion.Header>
          <Accordion.Body>
           <p>At MRI Scan centers, an MRI scan is usually performed by certified radiology technologists or radiographers. The radiology technologists or radiographers are certified and specially trained healthcare experts to carry out the imaging investigations such as MRI scan effectively.</p>
           <p>During the scanning procedure, Radiology Technologist sits in a different room to control the scanner using the computer to prevent the adverse effects of the magnetic field produced by the MRI scanner. After completion of the procedure, the radiologist will interpret the result of imaging tests to diagnose the disease.</p> 
          </Accordion.Body>
        </Accordion.Item>
      </Accordion>
    );
  }
  
  export default BasicExample;