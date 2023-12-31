import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import NiceModal, { useModal } from "@ebay/nice-modal-react";
import { Label } from "@radix-ui/react-label";
import { Copy } from "lucide-react";
import React, { useEffect, useRef } from "react";

const URLModal = NiceModal.create(() => {
  const modal = useModal("URLModal");
  const dialogRef = useRef<HTMLDivElement>(null);
  const wishId = modal.args?._id as string;
  const url = window.location.origin + "/wish/" + wishId;

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dialogRef.current &&
        !dialogRef.current.contains(event.target as Node)
      ) {
        modal.remove();
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [modal]);

  const copyToClipboard = () => {
    navigator.clipboard.writeText(url);
  };

  return (
    <Dialog open={modal.visible}>
      <DialogContent
        className="text-gray-700 sm:max-w-md"
        ref={dialogRef}
        id="URLModal"
      >
        <DialogHeader>
          <DialogTitle>Share link</DialogTitle>
          <DialogDescription>
            Anyone who has this link will be able to view this.
          </DialogDescription>
        </DialogHeader>
        <div className="flex items-center space-x-2">
          <div className="grid flex-1 gap-2">
            <Label htmlFor="link" className="sr-only">
              Link
            </Label>
            <Input
              id="link"
              defaultValue={url}
              readOnly
              className="text-gray-700"
            />
          </div>
          <Button
            type="submit"
            size="sm"
            className="px-3"
            onClick={copyToClipboard}
          >
            <span className="sr-only">Copy</span>
            <Copy className="h-4 w-4" />
          </Button>
        </div>
        <DialogFooter className="sm:justify-start"></DialogFooter>
      </DialogContent>
    </Dialog>
  );
});

export default URLModal;
