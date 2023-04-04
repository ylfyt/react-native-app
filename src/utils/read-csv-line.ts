import RNFetchBlob from 'rn-fetch-blob';
import {IProduct} from '../interfaces/product';

export const readProductFromCsv = async (
  path: string,
  start: number,
  end: number,
): Promise<IProduct[]> => {
  const result: IProduct[] = [];
  try {
    const {fs} = RNFetchBlob;
    const bytes = await fs.readFile(path, 'utf8');
    let lines: string[] = bytes.split('\n');

    lines = lines.slice(start, end);
    for (const line of lines) {
      const data = line.split(',');
      result.push({
        id: data[0],
        name: data[3],
        description: data[8],
      });
    }
  } catch (error) {
    console.log(error);
  }

  return result;
};
