import { Component } from "react";
import StickerList from "../StickerList/StickerList";
import Choice from "../Choice/Choice";
import stickers from "../../stickers.json";

class Wrapper extends Component {
  state = {
    stickerLabel: "",
  };
  updateText = (e) => {
    const id = e.target.closest("li")?.id;
    if (!id) {
      console.log("not item");
      return;
    }
    const index = stickers.findIndex((sticker) => sticker.id === id);
    this.setState({ stickerLabel: stickers[index].label });
  };
  render() {
    return (
      <div>
        <StickerList updateText={this.updateText} data={stickers} />
        <Choice text={this.state.stickerLabel} />
      </div>
    );
  }
}

export default Wrapper;
