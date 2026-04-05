function saveProgress() {
  const user = auth.currentUser;

  db.collection("progress").doc(user.uid).set({
    module: moduleId,
    done: true
  });
}
