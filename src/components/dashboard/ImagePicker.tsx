import React, { useState } from 'react';
import { Input } from '../ui/input';
import { Upload, X } from 'lucide-react';
import { cn } from '@/lib/utils';
import { buttonVariants } from '../ui/button';
import { imageReader } from '@/lib/imageReader';
import { imageToBase64 } from '@/lib/utils';

const ImagePicker = () => {
    const [selectedImages, setSelectedImages] = useState<string[]>([]);

    const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (e.target.files) {
            const newImages = Array.from(e.target.files).map(file => URL.createObjectURL(file));
            setSelectedImages(prevImages => [...prevImages, ...newImages].slice(0, 5));
        }
    };

    const removeImage = (index: number) => {
        setSelectedImages(prevImages => prevImages.filter((_, i) => i !== index));
    };
    return (
        <div className="flex flex-col col-span-2 gap-y-4 items-center">
            <div className="grid gap-2">
                {selectedImages.map((image, index) => (
                    <div key={index} className="relative mt-4 flex flex-row hover:opacity-75">
                        <img src={image} alt={`Selected ${index + 1}`} className="aspect-square w-full rounded-md object-cover" />
                        <button onClick={() => removeImage(index)} className="absolute top-2 right-2 px-2 py-1">
                            <X />
                        </button>
                    </div>
                ))}
            </div>
            <Input type="file" accept="image/*" onChange={handleImageChange} className="hidden" id="imageInput" multiple />
            <label
                htmlFor="imageInput"
                className="flex aspect-square w-full items-center justify-center rounded-md border border-dashed cursor-pointer"
            >
                <>
                    <Upload className="h-6 w-6 text-muted-foreground" />
                    <span className="sr-only">Upload</span>
                </>
            </label>
        </div>
        // <div className="flex flex-col items-center">
        //     <Input type="file" accept="image/*" onChange={handleImageChange} className="hidden" id="imageInput" />
        //     <label
        //         htmlFor="imageInput"
        //         className="flex aspect-square w-full items-center justify-center rounded-md border border-dashed cursor-pointer"
        //     >
        //         {selectedImage ? (
        //             <div className="relative">
        //                 <img src={selectedImage} alt="Selected" className="h-28 w-28 object-cover object-center rounded-lg" />
        //                 <button
        //                     onClick={() => setSelectedImage(null)}
        //                     className={cn(buttonVariants({ variant: 'outline' }), 'absolute top-2 right-2 px-2 py-1')}
        //                 >
        //                     <X />
        //                 </button>
        //             </div>
        //         ) : (
        //             <>
        //                 <Upload className="h-4 w-4 text-muted-foreground" />
        //                 <span className="sr-only">Upload</span>
        //             </>
        //         )}
        //     </label>
        // </div>
    );
};

export default ImagePicker;
