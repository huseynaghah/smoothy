<h1 align="center">Smoothy 🎥✨</h1>

<p align="center">
  <b>A lightweight, smooth scroll-controlled video component for React.</b>
</p>

<div align="center">

  <a href="https://www.npmjs.com/package/smoothy-react">
    <img src="https://img.shields.io/npm/v/smoothy-react.svg?style=flat-square" alt="NPM Version">
  </a>
  <a href="https://opensource.org/licenses/MIT">
    <img src="https://img.shields.io/badge/License-MIT-yellow.svg?style=flat-square" alt="License: MIT">
  </a>
  <img src="https://img.shields.io/badge/build-passing-brightgreen.svg?style=flat-square" alt="Build Status">
  <a href="https://react.dev/">
    <img src="https://img.shields.io/badge/React-18+-informational.svg?style=flat-square" alt="React Support">
  </a>

</div>

<br/>

---

## 🚀 Introduction

**Smoothy** is a minimalistic React component that synchronizes video playback with the user's scroll position.  
Ideal for creating interactive landing pages, portfolios, or storytelling experiences.

---

## 📦 Installation

Install via npm:

```bash
npm install smoothy-react
```

## 🛠 Usage

Basic usage example:

```tsx
import './App.css';
import video from './media/vid.mp4';
import Smoothy, {IScrollVideo} from 'smoothy-video';


function App() {

    const smoothOptions : IScrollVideo = {
        videoSrc : video,
        pixelPerSeconds : 1000,
    }

    return (
        <>
            <div style={{backgroundColor: 'white', height: '150vh', color: 'black'}}>
                Some placeholder
            </div>
            <Smoothy options={smoothOptions}>
                <h1 style={{color: 'white'}}>Content</h1>
            </Smoothy>
            <div style={{backgroundColor: 'black', height: '150vh', color: 'white'}}>
                Some placeholder
            </div>
        </>
    )
}

export default App
```
**Note:** It is recommended that you import the video link.

## ⚙️ Props

| Prop              | Type   | Required                                                            | Description                                                       |
|-------------------|--------|---------------------------------------------------------------------|-------------------------------------------------------------------|
| options.videoSrc  | string | ✅                                                                   | Path or URL of the video source.                                  |
| options.pixelPerSeconds | number | ❌ |  Pixels needed to scroll one second of the video. (Default: 1000) |
| children | React.ReactNode | ❌ | Any React elements to render inside the Smoothy container. |

## 📸 Demo

**Link** : _coming soon..._

## 🧩 Features
- ⚡ Extremely lightweight

- 🎞 Smooth scroll to video time mapping

- 🎯 Precise frame control

- 🛡️ Fully TypeScript supported

- 🔥 Works with any MP4 or web-friendly video


## 📄 License
Distributed under the [MIT License](https://opensource.org/licenses/MIT).

<p align="center"> Made with ❤️ by Hüseynağa Haqverdiyev </p>
