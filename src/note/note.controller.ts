import { Body, Controller, Get, Post, Put } from '@nestjs/common';
import { Note } from 'src/models/note.model';
import{NoteService}from'src/note/note.service'
@Controller('note')
export class NoteController {
    constructor(private noteservice : NoteService){}

    @Get()
    getAllNote(){
        return this.noteservice.getAll()
    }
    @Post()
    createNewNote(@Body()note:Note){
        return this.noteservice.createNote(note)
    }
    @Put()
    upDateNote(@Body()note:Note){
        return this.noteservice.changeNote(note)
    }
    

}

