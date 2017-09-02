function getResponseText(response) { return response.text(); }

function getChapters() {
  return Promise.props({
    cover               : fetch("/chapters/cover.md").then(getResponseText),
    introduction        : fetch("/chapters/introduction.md").then(getResponseText),
    arduino_ecosystem   : fetch("/chapters/arduino_ecosystem.md").then(getResponseText),
    setup               : fetch("/chapters/setup.md").then(getResponseText),
    material            : fetch("/chapters/material.md").then(getResponseText),
    exercises           : fetch("/chapters/exercises.md").then(getResponseText),
  }).then(function(result) {
    return [
      result.cover,
      result.introduction,
      result.arduino_ecosystem,
      result.setup,
      result.material,
      result.exercises,
    ].join("\n");
  });
}
