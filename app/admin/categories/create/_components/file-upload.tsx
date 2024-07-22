"use client";
import { UploadDropzone } from "@/lib/uploadthing";
import Image from "next/image";
import toast from "react-hot-toast";

interface FileUploadProps {
  onChange: (item: string) => void;
  value: string;
  onRemove: () => void;
}

export default function FileUpload({
  onChange,
  onRemove,
  value,
}: FileUploadProps) {
  return (
    <div className="min-h-32 flex items-center gap-x-2 justify-between flex-wrap ">
      {value ? (
        <div>
          <Image src={value} alt={"image"} width={200} height={120} />
        </div>
      ) : (
        <div>
          <UploadDropzone
            endpoint="categoryImage"
            onClientUploadComplete={(res) => {
              onChange(res?.[0].url);
            }}
            onUploadError={(error: Error) => {
              toast.error(error?.message);
            }}
          />
          <div className="text-xs to-muted-foreground mt-4">
            16:9 aspect radio recommended
          </div>
        </div>
      )}
    </div>
  );
}
