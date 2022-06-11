import { saveAs } from 'file-saver';
import JSZip from 'jszip';

export function exportTxtToZip(th: string, jsonData: any[], txtName = 'file', zipName = 'file') {
    const zip = new JSZip();
    const data = jsonData;
    let txtData = `${th}\r\n`;
    data.forEach((row) => {
        let tempStr = '';
        tempStr = row.toString();
        txtData += `${tempStr}\r\n`;
    });
    zip.file(`${txtName}.txt`, txtData);
    zip.generateAsync({
        type: 'blob',
    }).then(
        (blob) => {
            saveAs(blob, `${zipName}.zip`);
        },
        () => {
            alert('导出失败');
        },
    );
}
