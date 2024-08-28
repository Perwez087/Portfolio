import React from 'react';

const ProjectDescription = ({ project, projectDesc, next}) => (
    <div className="bg-black text-white py-6 md:py-12">
        <h2 className="text-2xl md:text-4xl font-bold mb-6">Project Description</h2>
        <p className="mb-6">{projectDesc.projectDescription1}</p>
        <p className="mb-12">{projectDesc.projectDescription2}</p>

        <div className="flex flex-col items-center gap-4">
            {project.map((item, idx) => (
                <div key={idx} className="flex flex-col md:flex-row md:justify-between">
                    <h3 className="text-xl md:text-2xl font-bold mb-4 uppercase md:w-[30%]">{item.projectDetail}</h3>
                    <p className="text-justify md:w-[70%] md:px-16">{item.projectDesc}</p>
                </div>
            ))}
        </div>
    </div>
);

export default ProjectDescription;
