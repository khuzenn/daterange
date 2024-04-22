<?php
defined('BASEPATH') OR exit('No direct script access allowed');

class Welcome extends CI_Controller {

	/**
	 * Index Page for this controller.
	 *
	 * Maps to the following URL
	 * 		http://example.com/index.php/welcome
	 *	- or -
	 * 		http://example.com/index.php/welcome/index
	 *	- or -
	 * Since this controller is set as the default controller in
	 * config/routes.php, it's displayed at http://example.com/
	 *
	 * So any other public methods not prefixed with an underscore will
	 * map to /index.php/welcome/<method_name>
	 * @see https://codeigniter.com/userguide3/general/urls.html
	 */
	public function index()
	{
		$this->load->model('Welcome_model');
		$this->load->helper('rupiah');

		$this->data['listdata'] = $this->Welcome_model->getAllData();

		$this->load->view('welcome_message', $this->data);
	}

	public function fetch_data() {
        $start_date = $this->input->post('start_date');
        $end_date = $this->input->post('end_date');
        
        $data['result'] = $this->pegawai_model->get_data($start_date, $end_date);
        
        $this->output->set_content_type('application/json')->set_output(json_encode($data));
    }
}