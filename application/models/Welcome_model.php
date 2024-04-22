<?php if (!defined('BASEPATH')) exit('No direct script access allowed');

class Welcome_model extends CI_Model
{
	function __construct()
	{
		parent::__construct();
	}

	public function getAllData()
	{
		$this->db->from("pegawai");

		return $this->db->get();
	}

    public function get_data($start_date, $end_date) {
        $this->db->where('tanggal >=', $start_date);
        $this->db->where('tanggal <=', $end_date);
        $query = $this->db->get('pegawai');
        
        return $query->result_array();
    }
}
