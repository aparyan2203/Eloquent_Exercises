// Q1
// The skill-sharing server keeps its data purely in memory. This means that when it crashes or is restarted for any reason, all talks and comments are lost.
// Extend the server so that it stores the talk data to disk and automatically reloads the data when it is restarted. Don’t worry about eﬀiciency—do the simplest thing that works.
// This isn't a stand-alone file, only a redefinition of a few
// fragments from skillsharing/skillsharing_server.js
import {readFileSync, writeFile} from "node:fs";

const fileName = "./talks.json";

SkillShareServer.prototype.updated = function() {
  this.version++;
  let response = this.talkResponse();
  this.waiting.forEach(resolve => resolve(response));
  this.waiting = [];

  writeFile(fileName, JSON.stringify(this.talks), e => {
    if (e) throw e;
  });
};

function loadTalks() {
  try {
    return JSON.parse(readFileSync(fileName, "utf8"));
  } catch (e) {
    return {};
  }
}

// The line that starts the server must be changed to
new SkillShareServer(loadTalks()).start(8000);

// Q2
// The skill-sharing server keeps its data purely in memory. This means that when it crashes or is restarted for any reason, all talks and comments are lost.
// Extend the server so that it stores the talk data to disk and automatically reloads the data when it is restarted. Don’t worry about eﬀiciency—do the simplest thing that works.
class Talk {
    constructor(talk, dispatch) {
      this.comments = elt("div");
      this.dom = elt(
        "section", {className: "talk"},
        elt("h2", null, talk.title, " ", elt("button", {
          type: "button",
          onclick: () => dispatch({type: "deleteTalk",
                                   talk: talk.title})
        }, "Delete")),
        elt("div", null, "by ",
            elt("strong", null, talk.presenter)),
        elt("p", null, talk.summary),
        this.comments,
        elt("form", {
          onsubmit(event) {
            event.preventDefault();
            let form = event.target;
            dispatch({type: "newComment",
                      talk: talk.title,
                      message: form.elements.comment.value});
            form.reset();
          }
        }, elt("input", {type: "text", name: "comment"}), " ",
            elt("button", {type: "submit"}, "Add comment")));
      this.syncState(talk);
    }
  
    syncState(talk) {
      this.talk = talk;
      this.comments.textContent = "";
      for (let comment of talk.comments) {
        this.comments.appendChild(renderComment(comment));
      }
    }
  }
  
  class SkillShareApp {
    constructor(state, dispatch) {
      this.dispatch = dispatch;
      this.talkDOM = elt("div", {className: "talks"});
      this.talkMap = Object.create(null);
      this.dom = elt("div", null,
                     renderUserField(state.user, dispatch),
                     this.talkDOM,
                     renderTalkForm(dispatch));
      this.syncState(state);
    }
  
    syncState(state) {
      if (state.talks == this.talks) return;
      this.talks = state.talks;
  
      for (let talk of state.talks) {
        let found = this.talkMap[talk.title];
        if (found && found.talk.presenter == talk.presenter &&
            found.talk.summary == talk.summary) {
          found.syncState(talk);
        } else {
          if (found) found.dom.remove();
          found = new Talk(talk, this.dispatch);
          this.talkMap[talk.title] = found;
          this.talkDOM.appendChild(found.dom);
        }
      }
      for (let title of Object.keys(this.talkMap)) {
        if (!state.talks.some(talk => talk.title == title)) {
          this.talkMap[title].dom.remove();
          delete this.talkMap[title];
        }
      }
    }
  }
  