import React, { Component } from "react";
import "./IssueCard.css";
import { StatefulTooltip } from "baseui/tooltip";

class IssueCard extends Component {
  render() {
    const issue = this.props.issue;
    var iconPR;
    var bgColor;
    if (issue["closed"] === false) {
      iconPR = {
        iconifyClass: "octicon:issue-opened",
        style: { color: "#28a745" },
      };
      bgColor = "#dcffe4";
    } else {
      iconPR = {
        iconifyClass: "octicon:issue-closed",
        style: { color: "#d73a49" },
      };
      bgColor = "#ffdce0";
    }

    var subtitleString =
      "#" + issue["number"] + " opened on " + issue["createdAt"].split("T")[0];
    var assignee;
    if (issue["assignees"]["nodes"].length > 0) {
      const name = issue["assignees"]["nodes"][0]["name"];
      assignee = (
        <StatefulTooltip
          key={name}
          content={() => <p>{`Assigned to ${name}`}</p>}
          returnFocus
          autoFocus
        >
          <a
            href={issue["assignees"]["nodes"][0]["url"]}
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              className="assigned-to-img"
              src={issue["assignees"]["nodes"][0]["avatarUrl"]}
              alt=""
            />
          </a>
        </StatefulTooltip>
      );
    } else {
      assignee = <noscript></noscript>;
    }

    return (
      <div
        className="issue-card"
        style={{
          backgroundColor: bgColor,
          border: `1px solid ${iconPR.style.color}`,
        }}
      >
        <div className="issue-top">
          <div className="issue-header">
            <span
              className="iconify issue-icons"
              data-icon={iconPR.iconifyClass}
              style={iconPR.style}
              data-inline="false"
            ></span>
            <div className="issue-title-header">
              <p className="issue-title">
                <a
                  href={issue["url"]}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {issue["title"]}
                </a>
              </p>
              <p className="issue-subtitle">{subtitleString}</p>
            </div>
          </div>
          {/* <div className="files-changed-header">
							<p
								className="files-changed-text"
								style={{ backgroundColor: iconPR.style.color }}
							>
								{pullRequest["changedFiles"]}
							</p>
							<p className="files-changed-text-2">Files Changed</p>
						</div> */}
        </div>
        <div className="issue-down">
          <div className="assignee-repo">
            <p className="parent-repo">
              Repository:{" "}
              <a
                style={{ color: iconPR.style.color }}
                href={issue["repository"]["url"]}
              >
                {issue["repository"]["owner"]["login"]}/
                {issue["repository"]["name"]}
              </a>
            </p>
            <div className="assignee-info">
              {/* <p className="additions-files">
									<strong>{pullRequest["additions"]} + </strong>
								</p>
								<p className="deletions-files">
									<strong>{pullRequest["deletions"]} - </strong>
								</p> */}
              {assignee}
            </div>
          </div>
          <div className="owner-img-div">
            <a
              href={issue["repository"]["owner"]["url"]}
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                className="owner-img"
                src={issue["repository"]["owner"]["avatarUrl"]}
                alt=""
              />
            </a>
          </div>
        </div>
      </div>
    );
  }
}

export default IssueCard;
