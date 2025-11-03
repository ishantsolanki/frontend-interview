import React, { useMemo } from "react";
import SingleApplication from "./SingleApplication";
import styles from "./Applications.module.css";
import { Loading } from "./components/Loading/Loading";
import { ApplicationDTO } from "./model/Applications";

const Applications = ({
  data,
  isLoading,
}: {
  data: ApplicationDTO[];
  isLoading: boolean;
}) => {
  return (
    <div className={styles.Applications}>
      {isLoading ? (
        <Loading />
      ) : (
        data?.map((application) => (
          <SingleApplication key={application.guid} application={application} />
        ))
      )}
    </div>
  );
};

export default Applications;
