import React from "react"
import { ConfirmationDialog, ConfirmationDialogOptions } from "@/components/ui/confirmation-dialog"

class ConfirmationServiceClass {
    ref: any

    open(options: ConfirmationDialogOptions) {
        if (this.ref) {
            this.ref.updateOptions({
                ...options,
                open: true
            })
        }
    }

    close() {
        if (this.ref) {
            this.ref.close()
        }
    }

    render() {
        return (
            <ConfirmationDialog ref={ref => this.ref = ref} />
        )
    }
}

export const ConfirmationService = new ConfirmationServiceClass()