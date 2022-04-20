import logo from "./logo.svg";
import "./App.css";
import faker from "@faker-js/faker";
import CommentDetail from "./CommentDetail";
import ApprovalCard from "./ApprovalCard";

function App() {
  return (
    <div className="ui container comments">

      <ApprovalCard>
        <div>
          <h4>Warning!</h4>
          Are you sure you want to do this?
        </div>
      </ApprovalCard>
      <ApprovalCard>
        <CommentDetail
          author="Carlos"
          timeAgo="Today at 6:00PM"
          comment="Reactero Junior"
          avatar={faker.image.image()}
        />
      </ApprovalCard>

      <ApprovalCard>
        <CommentDetail
          author="Bill"
          timeAgo="Today at 6:00PM"
          comment="Reactero Master"
          avatar={faker.image.image()}
        />
      </ApprovalCard>

      <ApprovalCard>
        <CommentDetail
          author="Dracir"
          timeAgo="Today at 6:00PM"
          comment="Reactero Dormilon"
          avatar={faker.image.image()}
        />
      </ApprovalCard>
    </div>
  );
}

export default App;
