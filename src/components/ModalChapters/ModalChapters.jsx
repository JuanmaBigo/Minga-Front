import React from 'react'

export default function ModalChapters() {
    return (
    <div className='modalChapters'>
        <Button onClick={handleOpen}>Open modal</Button>
        <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="parent-modal-title"
        aria-describedby="parent-modal-description"
        >
        <Box sx={{ ...style, width: 400 }}>
            <h2 id="parent-modal-title">Text in a modal</h2>
            <p id="parent-modal-description">
            Duis mollis, est non commodo luctus, nisi erat porttitor ligula.
            </p>
            <ChildModal />
        </Box>
        </Modal>
    </div>
    )
}
