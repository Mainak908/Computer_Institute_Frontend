"use client";

import { motion } from "framer-motion";
import anime from "animejs";
import { useEffect, useRef } from "react";
import Image from "next/image";
import { StudentProfileProps } from "@/lib/typs";
import { useQuery } from "@tanstack/react-query";
import { fetcherWc } from "@/helper";
import Loader from "@/components/Loader";

const StudentProfile: React.FC = () => {
  const cardRef = useRef<HTMLDivElement>(null);

  const {
    data: student,
    isError,
    isLoading,
  } = useQuery<StudentProfileProps>({
    queryKey: ["StudentData"],
    queryFn: () => fetcherWc("/studentData", "GET"),
  });

  useEffect(() => {
    anime({
      targets: cardRef.current,
      opacity: [0, 1],
      translateY: [20, 0],
      duration: 1000,
      easing: "easeOutExpo",
    });
  }, []);
  if (isLoading) return <Loader />;

  if (isError || !student) {
    return (
      <p className="relative top-1/2 text-center text-red-500 ">
        Student data is not available.
      </p>
    );
  }

  const remc = 6 - Math.abs(student.EnrollmentNo).toString().length;
  const paddedNumberc = student.EnrollmentNo.toString().padStart(remc, "0");

  const remcode = 6 - Math.abs(student.centerid).toString().length;
  const paddedCode = student.centerid.toString().padStart(remcode, "0");

  const studentDetails = [
    {
      id: "enrollment",
      label: "Enrollment No:",
      value: `YCTC${paddedCode}/${paddedNumberc}`,
    },
    { id: "card", label: "Id Card No:", value: student.IdCardNo },
    { id: "phone", label: "Phone:", value: student.mobileNo },
    { id: "email", label: "Email:", value: student.email },
    {
      id: "dob",
      label: "Date of Birth:",
      value: new Date(student.dob).toLocaleDateString("en-GB"),
    },
    { id: "father", label: "Father:", value: student.father },
    { id: "mother", label: "Mother:", value: student.mother },
    { id: "center", label: "Center:", value: student.center.Centername },

    {
      id: "Course",
      label: "Course:",
      value: student.course.CName,
    },
    {
      id: "Status",
      label: "Status:",
      value: student.status.val,
    },
  ];

  return (
    <motion.div
      ref={cardRef}
      className="max-w-4xl mx-auto my-10 bg-white shadow-lg rounded-2xl p-6 border border-gray-300"
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
    >
      <div className="flex items-center gap-6 mb-10">
        {student.imageLink ? (
          <Image
            src={student.imageLink}
            alt="Student Image"
            width={96}
            height={96}
            className="w-36 h-36 rounded-full shadow-lg border-2 border-purple-500"
          />
        ) : (
          <p className="text-gray-500">No Image Available</p>
        )}
        <div>
          <h2 className="text-4xl font-semibold text-gray-900 dark:text-white">
            {student.name}
          </h2>
          <p className="text-gray-600 dark:text-gray-300">
            {student.course.CName}
          </p>
        </div>
      </div>
      <div className="grid grid-cols-2 gap-4 text-md text-gray-700 dark:text-gray-300">
        {studentDetails.map((detail) => (
          <div key={detail.id} className="flex flex-col">
            <p className="font-semibold">{detail.label}</p>
            <p>{detail.value}</p>
          </div>
        ))}
      </div>
    </motion.div>
  );
};

export default StudentProfile;
