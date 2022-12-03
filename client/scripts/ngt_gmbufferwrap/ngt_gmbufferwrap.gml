
//
function GMBufferWrapRead(_buffer) constructor {
	// Constructor
	
	self.buffer = _buffer;
	
	#region implements Main
	
	static getSize = function() {
		return buffer_get_size(self.buffer);	
	}
	
	static getAlign = function() {
		return buffer_get_alignment(self.buffer);	
	}
	
	static getAnchor = function() {
		return buffer_tell(self.buffer);	
	}
	
	static setAnchor = function(anchor, from = buffer_seek_start) {
		buffer_seek(self.buffer, from, anchor);
	}
	
	#endregion
	
	#region implements Read
	
	static read_u8 = function() { return buffer_read(self.buffer, buffer_u8); }
	static read_u16 = function() { return buffer_read(self.buffer, buffer_u16); }
	static read_u32 = function() { return buffer_read(self.buffer, buffer_u32); }
	static read_u64 = function() { return buffer_read(self.buffer, buffer_u64); }
	
	static read_s8 = function() { return buffer_read(self.buffer, buffer_s8); }
	static read_s16 = function() { return buffer_read(self.buffer, buffer_s16); }
	static read_s32 = function() { return buffer_read(self.buffer, buffer_s32); }
	
	static read_f32 = function() { return buffer_read(self.buffer, buffer_f32); }
	static read_f64 = function() { return buffer_read(self.buffer, buffer_f64); }
	
	static read_str = function() { return buffer_read(self.buffer, buffer_string); }
	
	#endregion
	
}

//
function GMBufferWrapWrite(_buffer) : GMBufferWrapRead(_buffer) constructor {
	// Constructor
	
	#region implements Write
	
	static write_u8 = function(value) { return buffer_write(self.buffer, buffer_u8, value); }
	static write_u16 = function(value) { return buffer_write(self.buffer, buffer_u16, value); }
	static write_u32 = function(value) { return buffer_write(self.buffer, buffer_u32, value); }
	static write_u64 = function(value) { return buffer_write(self.buffer, buffer_u64, value); }
	
	static write_s8 = function(value) { return buffer_write(self.buffer, buffer_s8, value); }
	static write_s16 = function(value) { return buffer_write(self.buffer, buffer_s16, value); }
	static write_s32 = function(value) { return buffer_write(self.buffer, buffer_s32, value); }
	
	static write_f32 = function(value) { return buffer_write(self.buffer, buffer_f32, value); }
	static write_f64 = function(value) { return buffer_write(self.buffer, buffer_f64, value); }
	
	static write_str = function(value) { return buffer_write(self.buffer, buffer_string, value); }
	
	#endregion
	
}
