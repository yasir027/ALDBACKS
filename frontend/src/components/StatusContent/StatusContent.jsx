import React from "react";
import styles from "./StatusContent.module.css";

const StatusContent = ({ judgmentData, searchTerms }) => {
  const highlightText = (text) => {
    if (!searchTerms || searchTerms.length === 0) {
      return text;
    }

    const regex = new RegExp(`(${searchTerms.join('|')})`, 'gi');
    return text.replace(regex, (match) => `<span class=${styles.highlight}>${match}</span>`);
  };

  return (
    <div className={styles.scrollableText}>
      <h3>STATUS</h3>
      {judgmentData && judgmentData.JudgmentStatuses && judgmentData.JudgmentStatuses.length > 0 ? (
        judgmentData.JudgmentStatuses.map((status) => (
          <div key={status.judgmentStatusId}>
            <h3>{highlightText(status.judgmentStatusLinkCitation)}</h3>
            <p>{status.JudgmentStatusType ? highlightText(status.JudgmentStatusType.judgmentStatusTypeName) : ''}</p>
          </div>
        ))
      ) : (
        <p>No status information available</p>
      )}
    </div>
  );
};

export default StatusContent;
