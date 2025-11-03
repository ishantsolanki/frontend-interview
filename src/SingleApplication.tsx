import React from "react";
import { format } from "date-fns";
import styles from "./SingleApplication.module.css";

const SingleApplication = ({ application }) => {
  return (
    <div className={styles.SingleApplication}>
      <div className={styles.cell}>
        <sub>Company</sub>
        {application.company}
      </div>
      <div className={styles.cell}>
        <sub>Name</sub>
        {application.first_name} {application.last_name}
      </div>
      <div className={styles.cell}>
        <sub>Email</sub>
        <span className={styles.highlight}>{application.email}</span>
      </div>
      <div className={styles.cell}>
        <sub>Loan Amount</sub>
        {(application.loan_amount || 0).toLocaleString("en-GB", {
          style: "currency",
          currency: "GBP",
          minimumFractionDigits: 0,
          maximumFractionDigits: 0,
        })}
      </div>
      <div className={styles.cell}>
        <sub>Application Date</sub>
        {format(new Date(application.date_created), "dd-MM-yyyy")}
      </div>
      <div className={styles.cell}>
        <sub>Expiry date</sub>
        {format(new Date(application.expiry_date), "dd-MM-yyyy")}
      </div>
    </div>
  );
};

export default SingleApplication;
