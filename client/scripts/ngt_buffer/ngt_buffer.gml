
function NGT_bufferToString(_buffer, _maxBytes=50) {
	var _bytes = buffer_get_size(_buffer);
	
	if (_bytes == 0) {
		return "<Buffer >";
	}
	
	var _bytesView = min(_bytes, _maxBytes);
	var _bytesHide = _bytes - _bytesView;
	
	var _bufTxt = UNIT_bufTxtCreate(_bytesView * 2 + 48);
	UNIT_bufTxtAppend(_bufTxt, "<Buffer");
	
	for (var _i = 0; _i < _bytesView; ++_i) {
		var _u8 = buffer_peek(_buffer, _i, buffer_u8);
		var _u8Bytes = string_lower(UNIT_toStrIntTBase(_u8, 16));
		
		if (string_length(_u8Bytes) == 1) {
			UNIT_bufTxtPush(_bufTxt, " 0", _u8Bytes);
			continue;
		}
		
		UNIT_bufTxtPush(_bufTxt, " ", _u8Bytes);
	}
	
	if (_bytesHide == 0) {
		UNIT_bufTxtAppend(_bufTxt, ">");
	} else {
		UNIT_bufTxtPush(_bufTxt,  " ... ", string(_bytesHide), " more bytes>");
	}
	
	return UNIT_bufTxtFree(_bufTxt, true);
}
