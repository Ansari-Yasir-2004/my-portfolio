// import React from "react";

// const CaseStudyModal = ({ isOpen, onClose, project }) => {
//   if (!isOpen || !project) return null;

//   return (
//     <div className="modal-overlay" onClick={onClose}>
//       <div
//         className="modal-content"
//         onClick={(e) => e.stopPropagation()}
//       >
//         <button className="modal-close" onClick={onClose}>
//           ✖
//         </button>

//         <h2>{project.title}</h2>

//         <h4>Overview</h4>
//         <p>{project.description}</p>

//         <h4>Tech Stack</h4>
//         <p>{project.stack}</p>

//         {project.caseStudy?.features && (
//           <>
//             <h4>Features</h4>
//             <ul>
//               {project.caseStudy.features.map((f, i) => (
//                 <li key={i}>{f}</li>
//               ))}
//             </ul>
//           </>
//         )}

//         {project.caseStudy?.impact && (
//           <>
//             <h4>Impact</h4>
//             <p>{project.caseStudy.impact}</p>
//           </>
//         )}
//       </div>
//     </div>
//   );
// };

// export default CaseStudyModal;

import React from "react";
import { Modal, Button } from "react-bootstrap";

const CaseStudyModal = ({ show, handleClose, project }) => {
  if (!project) return null;

  return (
    <Modal show={show} onHide={handleClose} centered size="lg">
      <Modal.Header closeButton>
        <Modal.Title>{project.title}</Modal.Title>
      </Modal.Header>

      <Modal.Body>
        <h5>Overview</h5>
        <p>{project.caseStudy?.overview}</p>

        <h5>Tech Stack</h5>
        <p>{project.stack}</p>

        <h5>Features</h5>
        <ul>
          {project.caseStudy?.features?.map((f, i) => (
            <li key={i}>{f}</li>
          ))}
        </ul>

        <h5>Impact</h5>
        <p>{project.caseStudy?.impact}</p>
      </Modal.Body>

      <Modal.Footer>
        <Button variant="secondary" onClick={handleClose}>
          Close
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default CaseStudyModal;