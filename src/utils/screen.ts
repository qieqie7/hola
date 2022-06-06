export function fullScreen(element: Element) {
    if (element.requestFullscreen) {
        element.requestFullscreen();
        // @ts-ignore
    } else if (element.msRequestFullscreen) {
        // @ts-ignore
        element.msRequestFullscreen();
        // @ts-ignore
    } else if (element.mozRequestFullScreen) {
        // @ts-ignore
        element.mozRequestFullScreen();
        // @ts-ignore
    } else if (element.webkitRequestFullScreen) {
        // @ts-ignore
        element.webkitRequestFullScreen();
    } else {
        throw new Error('抱歉，您的浏览器不支持自动全屏操作');
    }
}

export function cancelFullScreen() {
    if (document.exitFullscreen) {
        document.exitFullscreen();
        // @ts-ignore
    } else if (document.msExitFullscreen) {
        // @ts-ignore
        document.msExitFullscreen();
        // @ts-ignore
    } else if (document.mozCancelFullScreen) {
        // @ts-ignore
        document.mozCancelFullScreen();
        // @ts-ignore
    } else if (document.webkitCancelFullScreen) {
        // @ts-ignore
        document.webkitCancelFullScreen();
    } else {
        throw new Error('抱歉，您的浏览器不支持自动取消全屏操作');
    }
}
