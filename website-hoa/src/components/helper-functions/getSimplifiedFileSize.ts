export default function getSimplifiedFileSize(bytes: number) {
  let convertedBytes = 0;
  let unit = '';

  if (bytes <= 1024) {
    convertedBytes = bytes;
    unit = 'bytes';
  } else if (bytes < 1048576) {
    convertedBytes = bytes / 1024.0;
    unit = 'KB';
  } else if (bytes < 1073741824) {
    convertedBytes = bytes / 1048576.0;
    unit = 'MB';
  } else {
    convertedBytes = bytes / 1073741824;
    unit = 'GB';
  }

  const size = convertedBytes.toFixed(1);

  return {
    size,
    unit,
  };
}
