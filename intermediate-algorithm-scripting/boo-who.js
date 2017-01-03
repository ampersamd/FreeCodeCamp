//Returns true if value is classified as a boolean primitive; otherwise false

function booWho(bool) {
  // What is the new fad diet for ghost developers? The Boolean.\
  if (bool === true || bool === false) {
    bool = true;
  } else {
    bool = false;
  }
  return bool;
}

booWho(null);
