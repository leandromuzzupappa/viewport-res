# viewport-res

> Lightweight viewport resolution display for web development

A minimal, zero-dependency JavaScript library that displays the current viewport resolution on your screen. Perfect for responsive web development and debugging.

![npm](https://img.shields.io/npm/v/viewport-res)
![license](https://img.shields.io/npm/l/viewport-res)
![size](https://img.shields.io/bundlephobia/minzip/viewport-res)

## 🚀 Features

- **🪶 Lightweight**: Less than 1KB minified and gzipped
- **📦 Zero dependencies**: No external libraries required
- **🎨 Customizable**: Position, colors, and styling options
- **⚡ Performance**: Debounced resize events
- **♿ Accessible**: Properly hidden from screen readers
- **📱 Responsive**: Updates in real-time as you resize

## 📦 Installation

```bash
npm i -D viewport-res
```

Or use via CDN:

```html
<script src="https://unpkg.com/viewport-res"></script>
```

## 🔧 Usage

### ES Modules

```javascript
import viewportRes from "viewport-res";

// Initialize with default options
viewportRes();
```

### Script Tag

```html
<script src="https://unpkg.com/viewport-res"></script>
<script>
  // Automatically initializes on window load
</script>
```

## ⚙️ Configuration

Customize the appearance and behavior:

```javascript
import viewportRes from "viewport-res";

const instance = viewportRes({
  debounceDelay: 100, // Resize debounce delay in ms
  position: "top-right", // 'top-left' | 'top-right' | 'bottom-left' | 'bottom-right'
  color: "#00ff00",
  backgroundColor: "rgba(0,0,0,0.8)",
  fontSize: "14px",
});
```

## 🎮 API

The `viewportRes()` function returns an instance with the following methods:

### `show()`

Shows the viewport display (if hidden).

```javascript
instance.show();
```

### `hide()`

Hides the viewport display.

```javascript
instance.hide();
```

### `update()`

Manually updates the displayed resolution.

```javascript
instance.update();
```

### `destroy()`

Removes the viewport display and cleans up event listeners.

```javascript
instance.destroy();
```

## 💡 Examples

### Development Mode Only

```javascript
if (process.env.NODE_ENV === "development") {
  import("viewport-res").then(({ default: viewportRes }) => {
    viewportRes();
  });
}
```

### Custom Styling

```javascript
viewportRes({
  position: "bottom-right",
  color: "#ffffff",
  backgroundColor: "rgba(255, 0, 0, 0.8)",
  fontSize: "16px",
});
```

### Toggle Visibility

```javascript
const vr = viewportRes();

document.addEventListener("keydown", (e) => {
  if (e.key === "v" && e.ctrlKey) {
    // Toggle with Ctrl+V
    if (vr.isVisible) {
      vr.hide();
    } else {
      vr.show();
    }
  }
});
```

## 🎨 Position Options

- `top-left` - Top left corner (default)
- `top-right` - Top right corner
- `bottom-left` - Bottom left corner
- `bottom-right` - Bottom right corner

## 🔌 Framework Integration

### React

```jsx
import { useEffect } from "react";
import viewportRes from "viewport-res";

function App() {
  useEffect(() => {
    const instance = viewportRes();
    return () => instance.destroy();
  }, []);

  return <div>Your app</div>;
}
```

### Vue

```vue
<script setup>
import { onMounted, onUnmounted } from "vue";
import viewportRes from "viewport-res";

let instance;

onMounted(() => {
  instance = viewportRes();
});

onUnmounted(() => {
  instance?.destroy();
});
</script>
```

## 📄 License

MIT © [Leandro Muzzupappa](https://github.com/leandromuzzupappa)

## 🤝 Contributing

Contributions, issues and feature requests are welcome!

1. Fork it
2. Create your feature branch (`git checkout -b feature/amazing`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing`)
5. Open a Pull Request

## ⭐ Show your support

Give a ⭐️ if this project helped you!

---

Made with ❤️ by [Leandro Muzzupappa](https://github.com/leandromuzzupappa)
